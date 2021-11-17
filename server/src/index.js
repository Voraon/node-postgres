require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db/queries");
const port = 3000;

const knex = require("./db/knex");
app.use(express.json());
// const knex = require("knex")({
//   client: "pg",
//   connection: {
//     host: "localhost",
//     port: 5432,
//     user: "me",
//     password: "password",
//     database: "api",
//   },
// });
app.get("/users1", async (req, res) => {
  console.log("insdie get reque", req.body);
  const result = await knex.select("*").from("users1");
  res.json(result);
});
app.post("/users1", async (req, res) => {
  console.log("insdie post request", req.body);
  const { id, name, email } = req.body;
  // const result = await knex.select("*").from("users");
  await knex("users").insert({
    email: "hi@example.com",
    id: "3",
    name: "hi",
  });

  const result = await knex.select("*").from("users");
  res.json(result);
});
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", db.getUsers);

app.get("/emp", db.getEmployee);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();

// async function main() {
//   // ... you will write your Prisma Client queries here
//   const allUsers = await prisma.user.findMany();
//   console.log(allUsers);
// }

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
