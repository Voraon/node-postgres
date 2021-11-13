const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type User {
    id: Int
    name: String
    email: String
  }

  type Query {
    books: [Book]
    user: [User]
  }
`;
module.exports = typeDefs;
