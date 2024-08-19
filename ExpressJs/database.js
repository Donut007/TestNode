const mysql = require('mysql2');

// Create a connection to the database
const con = mysql.createConnection({
  host: 'localhost',     // Replace with your host
  user: 'root',          // Replace with your database username
  password: '',  // Replace with your database password
  database: 'testreact' // Replace with your database name
});

// Connect to MySQL
con.connect((err) => {
    if (err) throw err;
    con.query("SELECT * FROM tb_user", function (err, result, fields) {
        console.log(result[0].UserName);
    });
  });