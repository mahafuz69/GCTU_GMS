// Sample data storage
let students = [
    {
        id: 1,
        name: "John Doe",
        indexNumber: "GCTU2023001",
        program: "Computer Science",
        year: 3,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "A", points: 4.0, semester: "Second Semester" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "B+", points: 3.5, semester: "Second Semester" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "A-", points: 3.7, semester: "Second Semester" },
            { courseCode: "CS304", courseName: "Software Engineering", credits: 3, grade: "A", points: 4.0, semester: "Second Semester" }
        ]
    },
    {
        id: 2,
        name: "Abdul-Mumin Mahafuz",
        indexNumber: "GCTU2023002",
        program: "Information Technology",
        year: 2,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A-", points: 3.7, semester: "Second Semester" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "B", points: 3.0, semester: "Second Semester" },
            { courseCode: "IT203", courseName: "System Administration", credits: 3, grade: "B+", points: 3.5, semester: "Second Semester" }
        ]
    },
    {
        id: 3,
        name: "Michael Johnson",
        indexNumber: "GCTU2023003",
        program: "Computer Science",
        year: 1,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "B", points: 3.0, semester: "First Semester" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "B-", points: 2.7, semester: "First Semester" }
        ]
    },
    {
        id: 4,
        name: "Sarah Williams",
        indexNumber: "GCTU2023004",
        program: "Information Technology",
        year: 3,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A", points: 4.0, semester: "Second Semester" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "A-", points: 3.7, semester: "Second Semester" },
            { courseCode: "IT203", courseName: "System Administration", credits: 3, grade: "A", points: 4.0, semester: "Second Semester" }
        ]
    },
    {
        id: 5,
        name: "David Brown",
        indexNumber: "GCTU2023005",
        program: "Computer Science",
        year: 2,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "B+", points: 3.5, semester: "First Semester" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "A-", points: 3.7, semester: "First Semester" }
        ]
    },
    {
        id: 6,
        name: "Emily Davis",
        indexNumber: "GCTU2023006",
        program: "Information Technology",
        year: 1,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "B+", points: 3.5, semester: "First" }
        ]
    },
    {
        id: 7,
        name: "James Ama",
        indexNumber: "GCTU2023007",
        program: "Computer Science",
        year: 4,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "A", points: 4.0, semester: "Second Semester" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "A", points: 4.0, semester: "Second Semester" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "A-", points: 3.7, semester: "Second Semester" },
            { courseCode: "CS304", courseName: "Software Engineering", credits: 3, grade: "A", points: 4.0, semester: "Second Semester" }
        ]
    },
    {
        id: 8,
        name: "Lisa Anderson",
        indexNumber: "GCTU2023008",
        program: "Information Technology",
        year: 2,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 9,
        name: "Robert Taylor",
        indexNumber: "GCTU2023009",
        program: "Computer Science",
        year: 3,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "C+", points: 2.5, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "B-", points: 2.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 10,
        name: "Amanda Martinez",
        indexNumber: "GCTU2023010",
        program: "Information Technology",
        year: 4,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "IT203", courseName: "System Administration", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 11,
        name: "Christopher Lee",
        indexNumber: "GCTU2023011",
        program: "Computer Science",
        year: 1,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "B-", points: 2.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 12,
        name: "Jessica White",
        indexNumber: "GCTU2023012",
        program: "Information Technology",
        year: 3,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 13,
        name: "Daniel Harris",
        indexNumber: "GCTU2023013",
        program: "Computer Science",
        year: 2,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 14,
        name: "Michelle Clark",
        indexNumber: "GCTU2023014",
        program: "Information Technology",
        year: 1,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" }
        ]
    },
    {
        id: 15,
        name: "Kevin Lewis",
        indexNumber: "GCTU2023015",
        program: "Computer Science",
        year: 4,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" },
            { courseCode: "CS304", courseName: "Software Engineering", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 16,
        name: "Nicole Robinson",
        indexNumber: "GCTU2023016",
        program: "Information Technology",
        year: 2,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" }
        ]
    },
    {
        id: 17,
        name: "Steven Walker",
        indexNumber: "GCTU2023017",
        program: "Computer Science",
        year: 3,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "B-", points: 2.7, semester: "Fall 2024" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "C+", points: 2.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 18,
        name: "Rachel Young",
        indexNumber: "GCTU2023018",
        program: "Information Technology",
        year: 4,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" },
            { courseCode: "IT203", courseName: "System Administration", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 19,
        name: "Anthony Hall",
        indexNumber: "GCTU2023019",
        program: "Computer Science",
        year: 1,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "C", points: 2.0, semester: "Fall 2024" }
        ]
    },
    {
        id: 20,
        name: "Stephanie Allen",
        indexNumber: "GCTU2023020",
        program: "Information Technology",
        year: 3,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 21,
        name: "Ryan King",
        indexNumber: "GCTU2023021",
        program: "Computer Science",
        year: 2,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 22,
        name: "Kimberly Wright",
        indexNumber: "GCTU2023022",
        program: "Information Technology",
        year: 1,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "B-", points: 2.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 23,
        name: "Mark Scott",
        indexNumber: "GCTU2023023",
        program: "Computer Science",
        year: 4,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "CS304", courseName: "Software Engineering", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 24,
        name: "Laura Green",
        indexNumber: "GCTU2023024",
        program: "Information Technology",
        year: 2,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 25,
        name: "Brian Adams",
        indexNumber: "GCTU2023025",
        program: "Computer Science",
        year: 3,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 26,
        name: "Megan Baker",
        indexNumber: "GCTU2023026",
        program: "Information Technology",
        year: 4,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" },
            { courseCode: "IT203", courseName: "System Administration", credits: 3, grade: "B-", points: 2.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 27,
        name: "Eric Nelson",
        indexNumber: "GCTU2023027",
        program: "Computer Science",
        year: 1,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 28,
        name: "Samantha Carter",
        indexNumber: "GCTU2023028",
        program: "Information Technology",
        year: 3,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" }
        ]
    },
    {
        id: 29,
        name: "Justin Mitchell",
        indexNumber: "GCTU2023029",
        program: "Computer Science",
        year: 2,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "C+", points: 2.5, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "B-", points: 2.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 30,
        name: "Amber Perez",
        indexNumber: "GCTU2023030",
        program: "Information Technology",
        year: 1,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 31,
        name: "Gregory Roberts",
        indexNumber: "GCTU2023031",
        program: "Computer Science",
        year: 4,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "B-", points: 2.7, semester: "Fall 2024" },
            { courseCode: "CS304", courseName: "Software Engineering", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" }
        ]
    },
    {
        id: 32,
        name: "Heather Turner",
        indexNumber: "GCTU2023032",
        program: "Information Technology",
        year: 2,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 33,
        name: "Jonathan Phillips",
        indexNumber: "GCTU2023033",
        program: "Computer Science",
        year: 3,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" }
        ]
    },
    {
        id: 34,
        name: "Melanie Campbell",
        indexNumber: "GCTU2023034",
        program: "Information Technology",
        year: 4,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" },
            { courseCode: "IT203", courseName: "System Administration", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 35,
        name: "Nathan Parker",
        indexNumber: "GCTU2023035",
        program: "Computer Science",
        year: 1,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" }
        ]
    },
    {
        id: 36,
        name: "Crystal Evans",
        indexNumber: "GCTU2023036",
        program: "Information Technology",
        year: 3,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" }
        ]
    },
    {
        id: 37,
        name: "Tyler Edwards",
        indexNumber: "GCTU2023037",
        program: "Computer Science",
        year: 2,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "B-", points: 2.7, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "C+", points: 2.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 38,
        name: "Vanessa Collins",
        indexNumber: "GCTU2023038",
        program: "Information Technology",
        year: 1,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" }
        ]
    },
    {
        id: 39,
        name: "Sean Stewart",
        indexNumber: "GCTU2023039",
        program: "Computer Science",
        year: 4,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" },
            { courseCode: "CS304", courseName: "Software Engineering", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 40,
        name: "Monica Sanchez",
        indexNumber: "GCTU2023040",
        program: "Information Technology",
        year: 2,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 41,
        name: "Adam Morris",
        indexNumber: "GCTU2023041",
        program: "Computer Science",
        year: 3,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "C", points: 2.0, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "C+", points: 2.5, semester: "Fall 2024" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "B-", points: 2.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 42,
        name: "Tiffany Rogers",
        indexNumber: "GCTU2023042",
        program: "Information Technology",
        year: 4,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "IT203", courseName: "System Administration", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 43,
        name: "Jeremy Reed",
        indexNumber: "GCTU2023043",
        program: "Computer Science",
        year: 1,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 44,
        name: "Ashley Cook",
        indexNumber: "GCTU2023044",
        program: "Information Technology",
        year: 3,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "B-", points: 2.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 45,
        name: "Carl Bailey",
        indexNumber: "GCTU2023045",
        program: "Computer Science",
        year: 2,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 46,
        name: "Denise Rivera",
        indexNumber: "GCTU2023046",
        program: "Information Technology",
        year: 1,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "C+", points: 2.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 47,
        name: "Patrick Cooper",
        indexNumber: "GCTU2023047",
        program: "Computer Science",
        year: 4,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" },
            { courseCode: "CS304", courseName: "Software Engineering", credits: 3, grade: "B-", points: 2.7, semester: "Fall 2024" }
        ]
    },
    {
        id: 48,
        name: "Catherine Richardson",
        indexNumber: "GCTU2023048",
        program: "Information Technology",
        year: 2,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "IT202", courseName: "Network Security", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 49,
        name: "Benjamin Cox",
        indexNumber: "GCTU2023049",
        program: "Computer Science",
        year: 3,
        grades: [
            { courseCode: "CS301", courseName: "Data Structures", credits: 3, grade: "A-", points: 3.7, semester: "Fall 2024" },
            { courseCode: "CS302", courseName: "Algorithm Analysis", credits: 3, grade: "A", points: 4.0, semester: "Fall 2024" },
            { courseCode: "CS303", courseName: "Database Systems", credits: 3, grade: "B+", points: 3.5, semester: "Fall 2024" }
        ]
    },
    {
        id: 50,
        name: "Gabrielle Ward",
        indexNumber: "GCTU2023050",
        program: "Information Technology",
        year: 1,
        grades: [
            { courseCode: "IT201", courseName: "Web Development", credits: 3, grade: "B", points: 3.0, semester: "Fall 2024" }
        ]
    }
];

let currentUser = null;
let currentStudent = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateStatistics();
    populateStudentsTable();
});

// Switch between login tabs
function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add('active');
    document.getElementById(`${tab}-tab`).classList.add('active');
}

// Admin login
function adminLogin(event) {
    event.preventDefault();
    const password = document.getElementById('adminPassword').value;
    
    if (password === 'admin123') {
        currentUser = 'admin';
        showDashboard('admin');
        showAlert('loginAlert', 'Login successful!', 'success');
    } else {
        showAlert('loginAlert', 'Invalid admin password!', 'error');
    }
}

// Student login
function studentLogin(event) {
    event.preventDefault();
    const name = document.getElementById('studentName').value;
    const indexNumber = document.getElementById('studentIndex').value;
    
    const student = students.find(s => 
        s.name.toLowerCase() === name.toLowerCase() && 
        s.indexNumber.toLowerCase() === indexNumber.toLowerCase()
    );
    
    if (student) {
        currentUser = 'student';
        currentStudent = student;
        showDashboard('student');
        populateStudentInfo(student);
        showAlert('loginAlert', 'Login successful!', 'success');
    } else {
        showAlert('loginAlert', 'Invalid credentials!', 'error');
    }
}

// Show dashboard based on user type
function showDashboard(type) {
    document.getElementById('loginContainer').style.display = 'none';
    
    if (type === 'admin') {
        document.getElementById('adminDashboard').classList.add('active');
        populateStudentsTable();
        updateStatistics();
    } else if (type === 'student') {
        document.getElementById('studentDashboard').classList.add('active');
        populateStudentGrades();
    }
}

// Logout function
function logout() {
    currentUser = null;
    currentStudent = null;
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('adminDashboard').classList.remove('active');
    document.getElementById('studentDashboard').classList.remove('active');
    
    // Clear forms
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById('loginAlert').innerHTML = '';
}

// Add new student
function addStudent(event) {
    event.preventDefault();
    
    const name = document.getElementById('newStudentName').value;
    const indexNumber = document.getElementById('newStudentIndex').value;
    const program = document.getElementById('newStudentProgram').value;
    const year = parseInt(document.getElementById('newStudentYear').value);
    
    // Check if student with same index already exists
    if (students.find(s => s.indexNumber === indexNumber)) {
        alert('Student with this index number already exists!');
        return;
    }
    
    const newStudent = {
        id: Date.now(),
        name: name,
        indexNumber: indexNumber,
        program: program,
        year: year,
        grades: []
    };
    
    students.push(newStudent);
    populateStudentsTable();
    updateStatistics();
    
    // Clear form
    event.target.reset();
    alert('Student added successfully!');
}

// Populate students table
function populateStudentsTable() {
    const tbody = document.getElementById('studentsTable');
    tbody.innerHTML = '';
    
    students.forEach(student => {
        const row = document.createElement('tr');
        const gpa = calculateGPA(student.grades);
        
        row.innerHTML = `
            <td>${student.indexNumber}</td>
            <td>${student.name}</td>
            <td>${student.program}</td>
            <td>Year ${student.year}</td>
            <td>${gpa.toFixed(2)}</td>
            <td>
                <button class="btn-small btn-edit" onclick="openGradeModal(${student.id})">Enter Grades</button>
                <button class="btn-small btn-delete" onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Calculate GPA
function calculateGPA(grades) {
    if (grades.length === 0) return 0;
    
    let totalPoints = 0;
    let totalCredits = 0;
    
    grades.forEach(grade => {
        totalPoints += grade.points * grade.credits;
        totalCredits += grade.credits;
    });
    
    return totalCredits > 0 ? totalPoints / totalCredits : 0;
}

// Update statistics
function updateStatistics() {
    document.getElementById('totalStudents').textContent = students.length;
    
    let totalGrades = 0;
    let totalGPA = 0;
    
    students.forEach(student => {
        totalGrades += student.grades.length;
        totalGPA += calculateGPA(student.grades);
    });
    
    document.getElementById('totalGrades').textContent = totalGrades;
    document.getElementById('avgGPA').textContent = students.length > 0 ? (totalGPA / students.length).toFixed(2) : '0.00';
}

// Open grade entry modal
function openGradeModal(studentId) {
    const student = students.find(s => s.id === studentId);
    if (!student) return;
    
    document.getElementById('modalStudentName').textContent = student.name;
    
    const gradeInputs = document.getElementById('gradeInputs');
    gradeInputs.innerHTML = '';
    
    courses.forEach(course => {
        const existingGrade = student.grades.find(g => g.courseCode === course.code);
        
        const div = document.createElement('div');
        div.className = 'form-group';
        
        div.innerHTML = `
            <label>${course.code} - ${course.name} (${course.credits} credits)</label>
            <select name="${course.code}" class="grade-select">
                <option value="">Select Grade</option>
                <option value="A|4.0" ${existingGrade && existingGrade.grade === 'A' ? 'selected' : ''}>A (4.0)</option>
                <option value="A-|3.7" ${existingGrade && existingGrade.grade === 'A-' ? 'selected' : ''}>A- (3.7)</option>
                <option value="B+|3.5" ${existingGrade && existingGrade.grade === 'B+' ? 'selected' : ''}>B+ (3.5)</option>
                <option value="B|3.0" ${existingGrade && existingGrade.grade === 'B' ? 'selected' : ''}>B (3.0)</option>
                <option value="B-|2.7" ${existingGrade && existingGrade.grade === 'B-' ? 'selected' : ''}>B- (2.7)</option>
                <option value="C+|2.5" ${existingGrade && existingGrade.grade === 'C+' ? 'selected' : ''}>C+ (2.5)</option>
                <option value="C|2.0" ${existingGrade && existingGrade.grade === 'C' ? 'selected' : ''}>C (2.0)</option>
                <option value="C-|1.7" ${existingGrade && existingGrade.grade === 'C-' ? 'selected' : ''}>C- (1.7)</option>
                <option value="D|1.0" ${existingGrade && existingGrade.grade === 'D' ? 'selected' : ''}>D (1.0)</option>
                <option value="F|0.0" ${existingGrade && existingGrade.grade === 'F' ? 'selected' : ''}>F (0.0)</option>
            </select>
        `;
        
        gradeInputs.appendChild(div);
    });
    
    // Store current student ID for saving
    document.getElementById('gradeModal').setAttribute('data-student-id', studentId);
    document.getElementById('gradeModal').style.display = 'block';
}

// Save grades
function saveGrades(event) {
    event.preventDefault();
    
    const studentId = parseInt(document.getElementById('gradeModal').getAttribute('data-student-id'));
    const student = students.find(s => s.id === studentId);
    
    if (!student) return;
    
    const gradeSelects = document.querySelectorAll('.grade-select');
    
    // Clear existing grades to update with new ones
    student.grades = [];
    
    gradeSelects.forEach(select => {
        if (select.value) {
            const [grade, points] = select.value.split('|');
            const course = courses.find(c => c.code === select.name);
            
            student.grades.push({
                courseCode: course.code,
                courseName: course.name,
                credits: course.credits,
                grade: grade,
                points: parseFloat(points),
                semester: "Fall 2024"
            });
        }
    });
    
    // Update displays
    populateStudentsTable();
    updateStatistics();
    closeModal('gradeModal');
    
    alert('Grades saved successfully!');
}

// Delete student
function deleteStudent(studentId) {
    if (confirm('Are you sure you want to delete this student?')) {
        students = students.filter(s => s.id !== studentId);
        populateStudentsTable();
        updateStatistics();
        alert('Student deleted successfully!');
    }
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Populate student information in student dashboard
function populateStudentInfo(student) {
    document.getElementById('currentStudentName').textContent = student.name;
    document.getElementById('currentStudentIndex').textContent = student.indexNumber;
    document.getElementById('currentStudentProgram').textContent = student.program;
    document.getElementById('currentStudentYear').textContent = `Year ${student.year}`;
    
    const gpa = calculateGPA(student.grades);
    document.getElementById('currentStudentGPA').textContent = gpa.toFixed(2);
}

// Populate student grades table
function populateStudentGrades() {
    if (!currentStudent) return;
    
    const tbody = document.getElementById('studentGradesTable');
    tbody.innerHTML = '';
    
    if (currentStudent.grades.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="6" style="text-align: center; color: #666;">No grades recorded yet</td>';
        tbody.appendChild(row);
        return;
    }
    
    currentStudent.grades.forEach(grade => {
        const row = document.createElement('tr');
        
        // Apply grade color class
        let gradeClass = '';
        if (grade.grade.startsWith('A')) gradeClass = 'grade-a';
        else if (grade.grade.startsWith('B')) gradeClass = 'grade-b';
        else if (grade.grade.startsWith('C')) gradeClass = 'grade-c';
        else if (grade.grade.startsWith('D')) gradeClass = 'grade-d';
        else if (grade.grade === 'F') gradeClass = 'grade-f';
        
        row.innerHTML = `
            <td>${grade.courseCode}</td>
            <td>${grade.courseName}</td>
            <td>${grade.credits}</td>
            <td class="${gradeClass}">${grade.grade}</td>
            <td>${grade.points.toFixed(1)}</td>
            <td>${grade.semester}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Show alert messages
function showAlert(containerId, message, type) {
    const container = document.getElementById(containerId);
    const alertClass = type === 'success' ? 'alert-success' : 'alert-error';
    
    container.innerHTML = `<div class="alert ${alertClass}">${message}</div>`;
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        container.innerHTML = '';
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('gradeModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}