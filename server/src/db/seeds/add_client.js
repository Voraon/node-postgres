exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("clientId")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("clientId").insert([
        { id: 1, client_id: "HSBC", env: "tpp" },
        { id: 2, client_id: "HDFC", env: "hdfcclient" },
        { id: 3, client_id: "ICICI", env: "cicilcient" },
        { id: 4, client_id: "sbi", env: "SBI" },

        { id: 5, client_id: "kotak", env: "kotak" },
      ]);
    });
};
