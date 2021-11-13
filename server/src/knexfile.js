require("dotenv").config();
const { PG_USERNAME, PG_PASSWORD, PG_DATABASE, PG_PORT } = process.env;
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      user: "me",
      password: "password",
      database: "api",
    },
    // pool: {
    //   min: 2,
    //   max: 10,
    // },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
