exports.seed = function (knex) {
  // Deletes ALL existing entries
  return (
    knex("users1")
      // .del()
      .then(function () {
        // Inserts seed entries
        return knex("users1").insert([
          {
            id: 5,
            name: "Pratik Agashe",
            email: "pratik@heady.io",
            password: "pratik",
          },
        ]);
      })
  );
};
