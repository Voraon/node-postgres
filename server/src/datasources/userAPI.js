const knex = require("../db/knex");

async function getUser() {
  console.log("user called");
  return knex.select("*").from("users");
}
