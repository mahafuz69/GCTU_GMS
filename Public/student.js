const express = require('express');
const router = express.Router();
const db = require('../db');
router.get('/', (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
});
router.post('/', (req, res) => {
    const { name, indexNumber, program, year } = req.body;
    const sql = "INSERT INTO students (name, indexNumber, program, year) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, indexNumber, program, year], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Student added successfully!', id: result.insertId });
    });
});
module.exports = router;