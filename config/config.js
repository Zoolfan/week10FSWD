const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "week10",
  password: "Imlonely32",
  port: 5432,
});

module.exports = pool;
