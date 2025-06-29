/* === File: db.js === */
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mahafuz@432',
    database: 'gctu_gms'
});

db.connect(err => {
    if (err) {
        console.error('❌ Database connection failed:', err);
        throw err;
    }
    console.log('✅ Connected to MySQL Database');
});

module.exports = db;