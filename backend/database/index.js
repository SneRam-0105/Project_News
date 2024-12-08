'use strict';
import mariadb from 'mariadb';

//const mariadb=require('mariadb');

async function main() {
  try {
    // Create a connection to the database
    const connection = await mariadb.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'team5',
      password: 'team5',
      database: 'edunewsdb'
    });

    // Run a query
    const [rows, fields] = await connection.execute('SELECT * FROM education');
    console.log('Query results:', fields);

    // Close the connection
    await connection.end();
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
