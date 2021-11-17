require("dotenv").config();
const { PG_USERNAME, PG_PASSWORD, PG_DATABASE, PG_PORT, DATABASE_URL } =
  process.env;

console.log("inside knexfile", PG_DATABASE, process.env.PG_USERNAME);
module.exports = {
  development: {
    client: "postgresql",
    // connection: `postgresql://${process.env.PG_USERNAME}:password@localhost:5432/api?schema=public`,
    // connection: {
    //   host: "localhost",
    //   port: 5432,
    //   user: "me",
    //   password: "password",
    //   database: "api",
    // },
    connection: {
      host: "localhost",
      port: PG_PORT,
      user: PG_USERNAME,
      password: PG_PASSWORD,
      database: PG_DATABASE,
    },
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
  production: {
    client: "postgresql",
    connection: `postgresql://me:password@localhost:5432/api?schema=public`,
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
};
