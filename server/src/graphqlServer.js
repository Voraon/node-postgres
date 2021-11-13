require("dotenv").config();
const express = require("express");
const db = require("./db/queries");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./schema");
// const knex = require("./db/knex");
// const { Pool, Client } = require("pg");
// const pool = new Pool({
//   user: process.env.PG_USERNAME,
//   host: "localhost",
//   database: process.env.PG_DATABASE,
//   password: process.env.PG_PASSWORD,
//   port: process.env.PG_PORT,
// });
// pool.connect();
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "me",
    password: "password",
    database: "api",
  },
});

const resolvers = {
  Query: {
    // books: () => {
    //   console.log("query called");
    //   return books;
    // },
    // user: () => {
    //   pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    //     if (error) {
    //       throw error;
    //     }
    //     const response = results.rows;
    //     console.log(response);
    //     return response;
    //   });
    // },
    user1: () => {
      return knex.select("*").from("users1");
    },
    post: () => {
      return knex.select("*").from("posts");
    },
  },
};

// // const server = new ApolloServer({ typeDefs, resolvers });

async function serverStart() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
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
