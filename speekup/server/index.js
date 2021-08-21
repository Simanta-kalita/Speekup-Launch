const express = require('express');
// const router = express.Router();

const app = express();
const corsMiddleware = require('./cors');


app.options('*', corsMiddleware);
app.use(corsMiddleware);
app.use("/email", express.json(), require("./routes/emailRoute"));

//create db

// app.get('/createdb', (req, res) => {
//   let sql = 'CREATE DATABASE speekup';
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("res ", result);
//     res.send('Database created...');
//   })
// })

// create table

// app.get('/createsubscriberstable', (req, res) => {
//   let sql = 'CREATE TABLE subscribers(date VARCHAR(50), email VARCHAR(100), PRIMARY KEY(email))';
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("res ", result);
//     res.send('Table created...');
//   })
// })

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});