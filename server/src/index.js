require("dotenv").config();
// const express = require("express");
// const { ApolloServer, gql } = require("apollo-server-express");

// const typeDefs = gql`
//   type Book {
//     title: String
//     author: String
//   }

//   type Query {
//     books: [Book]
//   }
// `;
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };
// const server = new ApolloServer({ typeDefs, resolvers });

// const app = express();
// // await server.start();
// server.applyMiddleware({ app });

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// );
// const books = [
//   {
//     title: "The Awakening",
//     author: "Kate Chopin",
//   },
//   {
//     title: "City of Glass",
//     author: "Paul Auster",
//   },
// ];

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db/queries");
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
