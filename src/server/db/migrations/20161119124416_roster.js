exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', (table) => {
    table.increments();
    table.string('team_slot').notNullable();
    table.string('name').notNullable();
    table.string('position').notNullable();
    table.string('nfl_team').notNullable();
    table.integer('team_color_r').notNullable();
    table.integer('team_color_g').notNullable();
    table.integer('team_color_b').notNullable();
    table.string('injury_status').notNullable();
    table.integer('projected_points').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players');
};
