exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("notes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("notes").insert([
        { id: 1, title: "hello1", content: "goodbye1" },
        { id: 2, title: "hello2", content: "goodbye1" },
        { id: 3, title: "hello3", content: "goodbye1" }
      ]);
    });
};
