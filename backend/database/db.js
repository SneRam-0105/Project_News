import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'team5',
  password: 'team5',
  database: 'edunewsdb',
  connectionLimit: 5,
});

export default pool;
