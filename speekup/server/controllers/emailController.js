const mysql = require('mysql');

// create connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'speekup'
});

// Connect

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("mysql connected")
});

exports.emailController = (req, res) => {
    console.log("RESULT ", req.body);
    const { date, email } = req.body;
    const data = { date: date, email: email };
    let sql = 'INSERT INTO subscribers SET ?';
    let query = db.query(sql, data, (err, result) => {
        if (err) throw err;
        console.log("res ", result);
        res.send('Data added...');
    })
}