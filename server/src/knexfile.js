require("dotenv").config();
const { PG_USERNAME, PG_PASSWORD, PG_DATABASE, PG_PORT, DATABASE_URL } =
  process.env;
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: 5432,
      user: "me",
      password: "password",
      database: "api",
    },
    // connection: {
    //   host: "localhost",
    //   port: PG_PORT,
    //   user: PG_USERNAME,
    //   password: PG_PASSWORD,
    //   database: PG_DATABASE,
    // },
    // pool: {
    //   min: 2,
    //   max: 10,
    // },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
};
