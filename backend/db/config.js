const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "blogs",
  password: "postgres",
  port: 5432,
});

// const pool = new Pool({
//   database:"blogs"
// })


function run(q, values, callback) {
  return pool.query(q, values, callback);
}

module.exports = { run };
