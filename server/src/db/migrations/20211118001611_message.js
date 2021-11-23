exports.up = function (knex) {
  let createQuery = `CREATE TABLE message(
        id SERIAL PRIMARY KEY NOT NULL,
        message TEXT,
        created_at TIMESTAMP
      )`;
  return knex.raw(createQuery);
};

exports.down = function (knex) {
  let dropQuery = `DROP TABLE message`;
  return knex.raw(dropQuery);
};
