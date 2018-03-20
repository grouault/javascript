/**
 * Created by grouault on 11/02/2018.
 */
// app.js
const mysql = require('mysql');

let connexion = {

    con: mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'gildas',
        database: 'sitepoint'
    })

};

connexion.connect = function () {

    this.con.connect((err) => {
      if (err) {
          console.log('erreur connexion  : err = ', err);
          return;
      }
      console.log('----');
      console.log('connexion established');
    });
};

connexion.close = function () {
  this.con.end(err => {
      if (err) {
          console.log('End connection : err = ', err);
      }
      console.log('End connexion......');
  });
};

connexion.query = function () {
    this.con.query('SELECT * FROM employees', (err,rows) => {
        if(err) throw err;
        console.log('Data received from Db:\n');
        rows.forEach((row) => {
            console.log(`${row.name} is in ${row.location}`);
        });
    });
};

connexion.connect();
connexion.query();
connexion.close();


// First you need to create a connection to the db
/**
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gildas',
    database: 'sitepoint'
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('-- 1-');
    console.log('Connection established');
    console.log('-- 2-');
});

con.query('SELECT * FROM employees', (err,rows) => {
    if(err) throw err;
    console.log('Data received from Db:\n');
    rows.forEach((row) => {
        console.log(`${row.name} is in ${row.location}`);
    });
});

con.end((err) => {
    if (err) {
        console.log('Erreur end connection');
    }
    console.log('End connection');
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});
 */