exports.seed = function (knex) {
  // Deletes ALL existing entries
  return (
    knex("posts")
      // .del()
      .then(function () {
        // Inserts seed entries
        return knex("posts").insert([
          {
            id: 10,
            title: "Random value",
            body: "More random value",
            user_id: 10,
          },
        ]);
      })
  );
};
