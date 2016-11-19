const knex = require('../knex');

function getAll (table) {
  return knex(table);
}

function getSingle (table, id) {
  return knex(table).where('id', id).first();
}

function update (table, body, id) {
  return knex(table).where('id', id).update({team_slot: body});
}

module.exports = {
  getAll, getSingle, update
};
