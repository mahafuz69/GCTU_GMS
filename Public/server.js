/* === File: server.js === */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Debug middleware to log all requests
app.use((req, res, next) => {
    console.log(`📝 ${new Date().toISOString()} - ${req.method} ${req.path}`);
    if (req.body && Object.keys(req.body).length > 0) {
        console.log('📦 Request body:', JSON.stringify(req.body, null, 2));
    }
    next();
});

// Admin login
app.post('/api/admin-login', (req, res) => {
    const { password } = req.body;
    
    if (!password) {
        return res.status(400).json({ success: false, message: 'Password is required' });
    }
    
    const query = 'SELECT * FROM Admin WHERE password = ?';
    db.query(query, [password], (err, results) => {
        if (err) {
            console.error('❌ Admin login error:', err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        
        console.log(`🔍 Admin login attempt - Found ${results.length} matching records`);
        
        if (results.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false, message: 'Invalid password' });
        }
    });
});

// Student login
app.post('/api/student-login', (req, res) => {
    const { name, indexNumber } = req.body;
    
    if (!name || !indexNumber) {
        return res.status(400).json({ success: false, message: 'Name and index number are required' });
    }
    
    const query = 'SELECT * FROM Student WHERE name = ? AND indexNumber = ?';
    db.query(query, [name, indexNumber], (err, results) => {
        if (err) {
            console.error('❌ Student login error:', err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        
        console.log(`🔍 Student login attempt - Found ${results.length} matching records`);
        
        if (results.length > 0) {
            res.json({ success: true, student: results[0] });
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }
    });
});

// Get all students with grades
app.get('/api/students', (req, res) => {
    console.log('🔍 Fetching all students...');
    
    db.query('SELECT * FROM Student', (err, students) => {
        if (err) {
            console.error('❌ Get students error:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        
        console.log(`📊 Found ${students.length} students in database`);
        if (students.length > 0) {
            console.log('👥 Students:', students.map(s => `${s.name} (${s.indexNumber})`));
        }
        
        if (students.length === 0) {
            return res.json([]);
        }

        const studentIds = students.map(s => s.id);
        const placeholders = studentIds.map(() => '?').join(',');
        const gradesQuery = `SELECT * FROM Grades WHERE student_id IN (${placeholders})`;
        
        db.query(gradesQuery, studentIds, (err, grades) => {
            if (err) {
                console.error('❌ Get grades error:', err);
                return res.status(500).json({ message: 'Database error' });
            }
            
            console.log(`📈 Found ${grades.length} grade records`);
            
            const grouped = students.map(student => {
                const studentGrades = grades.filter(g => g.student_id === student.id);
                return {
                    ...student,
                    grades: studentGrades
                };
            });
            
            res.json(grouped);
        });
    });
});

// Add new student
app.post('/api/add-student', (req, res) => {
    const { name, indexNumber, program, year } = req.body;
    
    console.log('➕ Attempting to add new student:', { name, indexNumber, program, year });
    
    if (!name || !indexNumber || !program || !year) {
        console.log('❌ Missing required fields');
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    
    // First check if student already exists
    const checkQuery = 'SELECT * FROM Student WHERE indexNumber = ?';
    db.query(checkQuery, [indexNumber], (err, existing) => {
        if (err) {
            console.error('❌ Error checking existing student:', err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        
        if (existing.length > 0) {
            console.log('⚠️ Student with this index number already exists');
            return res.status(400).json({ success: false, message: 'Student with this index number already exists' });
        }
        
        // Insert new student
        const insertQuery = 'INSERT INTO Student (name, indexNumber, program, year) VALUES (?, ?, ?, ?)';
        db.query(insertQuery, [name, indexNumber, program, year], (err, result) => {
            if (err) {
                console.error('❌ Add student error:', err);
                console.error('SQL Error details:', err.sqlMessage);
                return res.status(500).json({ success: false, message: 'Database error: ' + err.sqlMessage });
            }
            
            console.log('✅ Student added successfully with ID:', result.insertId);
            
            // Verify the student was actually inserted
            db.query('SELECT * FROM Student WHERE id = ?', [result.insertId], (err, verification) => {
                if (err) {
                    console.error('❌ Error verifying student insertion:', err);
                } else {
                    console.log('✅ Verification - Student exists in database:', verification[0]);
                }
            });
            
            res.json({ success: true, studentId: result.insertId });
        });
    });
});

// Save grades
app.post('/api/save-grades', (req, res) => {
    const { studentId, grades } = req.body;
    
    console.log('💾 Saving grades for student ID:', studentId);
    console.log('📋 Grades to save:', grades);
    
    if (!studentId || !grades || !Array.isArray(grades)) {
        return res.status(400).json({ success: false, message: 'Student ID and grades array are required' });
    }
    
    if (grades.length === 0) {
        console.log('📝 No grades to save');
        return res.json({ success: true });
    }

    // Delete existing grades first
    db.query('DELETE FROM Grades WHERE student_id = ?', [studentId], err => {
        if (err) {
            console.error('❌ Delete grades error:', err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        console.log('🗑️ Deleted existing grades for student');

        const gradeValues = grades.map(g => [studentId, g.course, g.grade]);
        const query = 'INSERT INTO Grades (student_id, course, grade) VALUES ?';

        db.query(query, [gradeValues], err => {
            if (err) {
                console.error('❌ Insert grades error:', err);
                return res.status(500).json({ success: false, message: 'Database error' });
            }
            
            console.log('✅ Grades saved successfully');
            res.json({ success: true });
        });
    });
});

// Test endpoint to check database status
app.get('/api/test-db', (req, res) => {
    console.log('🧪 Testing database connection...');
    
    db.query('SELECT COUNT(*) as student_count FROM Student', (err, result) => {
        if (err) {
            console.error('❌ Database test failed:', err);
            return res.status(500).json({ error: 'Database connection failed', details: err.message });
        }
        
        const count = result[0].student_count;
        console.log(`✅ Database test successful - ${count} students in database`);
        res.json({ 
            status: 'Database connected', 
            studentCount: count,
            timestamp: new Date().toISOString()
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log('📝 Debug logging enabled - check console for detailed information');
});