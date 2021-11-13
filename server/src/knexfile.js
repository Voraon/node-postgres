const { PG_USERNAME, PG_PASSWORD, PG_DATABASE, PG_PORT } = process.env;
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      // TODO change to your db name
      database: PG_DATABASE,

      // change to your db user
      user: PG_USERNAME,
      password: PG_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
    },
  },
};
