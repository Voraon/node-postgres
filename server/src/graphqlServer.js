require("dotenv").config();
const express = require("express");
const db = require("./db/queries");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./schema");
const knex = require("./db/knex");
const resolvers = {
  Query: {
    books: () => {
      console.log("query called");
      return books;
    },
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
    user: () => {
      const selectedUser = knex.select("*").from("users");

      console.log("user called", { selectedUser });
      return selectedUser;
    },
    user1: () => {
      return knex.select("*").from("users1");
    },
    post: () => {
      return knex.select("*").from("posts");
      // return knex.raw("select * from posts");
    },
  },
  Mutation: {
    addUser: async (_, args) => {
      const { id, user_name, user_email } = args.input;
      console.log("args", id, user_email, user_name);
      if (id) {
        await knex("users").insert({
          email: user_email,
          id: id,
          name: user_name,
        });
      }
      return knex.select("*").from("users");
    },
  },
};

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
