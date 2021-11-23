exports.seed = function (knex) {
  // Deletes ALL existing entries
  return (
    knex("users1")
      // .del()
      .then(function () {
        // Inserts seed entries
        return knex("users1").insert([
          {
            id: 10,
            name: "Vivek Oraon",
            email: "Vivek@heady.io",
            password: "Vivek",
          },
        ]);
      })
  );
};
