const { Pool, Client } = require("pg");
const { PG_USERNAME, PG_PASSWORD, PG_DATABASE, PG_PORT } = process.env;
const pool = new Pool({
  user: PG_USERNAME,
  host: "localhost",
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT,
});
const client = new Client({
  user: PG_USERNAME,
  host: "localhost",
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT,
});
module.exports = {
  async query(text, params) {
    // invocation timestamp for the query method
    const start = Date.now();
    console.log("text", text);
    console.log("params", { params });
    try {
      const res = await pool.query(text, params);
      // time elapsed since invocation to execution
      const duration = Date.now() - start;
      console.log("executed query", { text, duration });
      return res;
    } catch (error) {
      console.log("error in query", { text });
      throw error;
    }
  },
};
