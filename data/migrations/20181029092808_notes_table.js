exports.up = function(knex, Promise) {
  return knex.schema.createTable("notes", tbl => {
    tbl.increments(); // id
    tbl.string("title").notNullable();
    tbl.string("content").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("notes");
};
