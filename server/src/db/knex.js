require("dotenv").config();
const environment = process.env.NODE_ENV || "development";
// const config = require("../knexfile");
const config = require("../knexfile")[environment];
console.log(config.connection);
module.exports = require("knex")(config);
