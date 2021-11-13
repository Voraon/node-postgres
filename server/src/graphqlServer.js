require("dotenv").config();
const express = require("express");
const db = require("./db/queries");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./schema");
// const knex = require("knex")({
//   client: "pg",
//   connection: {
//     host: "localhost",
//     user: process.env.PG_USERNAME,
//     password: process.env.PG_PASSWORD,
//     database: process.env.PG_DATABASE,
//   },
// });

const { Pool, Client } = require("pg");
const pool = new Pool({
  user: process.env.PG_USERNAME,
  host: "localhost",
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
// pool.connect();

const resolvers = {
  Query: {
    books: () => {
      console.log("query called");
      return books;
    },
    user: () => {
      pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
        if (error) {
          throw error;
        }
        const response = results.rows;
        console.log(response);
        return response;
      });
    },
  },
};

// // const server = new ApolloServer({ typeDefs, resolvers });

async function serverStart() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: async () => ({
    //   db: await pool.connect(),
    // }),
  });
  const app = express();
  const port = process.env.PORT;
  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
}
serverStart();

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
  {
    title: "City of MEN",
    author: "Venom Kumar",
  },
];
