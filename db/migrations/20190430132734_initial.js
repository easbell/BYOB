
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('parties', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('symbol');
      table.string('founded');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('tweets', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.string('content');
      table.string('date_deleted');
      table.integer('parties_id').unsigned();
      table.foreign('parties_id')
        .references('parties.id');

      table.timestamps(true, true);
    })

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('tweets'),
    knex.schema.dropTable('parties')
  ]);
};
