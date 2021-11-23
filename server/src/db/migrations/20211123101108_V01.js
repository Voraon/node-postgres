exports.up = function (knex) {
  return knex.schema.createTable("clientId", function (table) {
    table.increments().primary();
    table.string("client_id", 255).notNullable();
    table.string("env", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("clientId");
};
