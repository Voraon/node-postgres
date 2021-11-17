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
  type Employee {
    id: Int
    name: String
    age: Int
    address: String
    salary: Int
  }
  type User1 {
    id: Int
    name: String
    email: String
    password: String
  }
  type Post {
    id: Int
    title: String
    body: String
    created_at: String
  }

  type Query {
    books: [Book]
    user: [User]
    user1: [User1]
    post: [Post]
    employee: [Employee]
  }
  type Mutation {
    addUser(id: String, name: String, email: String): [User]
  }
`;
module.exports = typeDefs;
