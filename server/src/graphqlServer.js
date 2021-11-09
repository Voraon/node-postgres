require("dotenv").config();
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
  type BookQuery {
    books: [Book]
  }
`;
const resolvers = {
  Query: {
    books: () => {
      console.log("query called");
      return books;
    },
  },
};

// const server = new ApolloServer({ typeDefs, resolvers });

async function serverStart() {
  const server = new ApolloServer({ typeDefs, resolvers });
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
