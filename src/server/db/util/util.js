const knex = require('../knex');

function getAll (table) {
  return knex(table);
}

function getSingle (table, id) {
  return knex(table).where('id', id).first();
}

function update (table, id, id2) {
  const player1 = knex(table).where('id', id)
  const player2 = knex(table).where('id', id2)
  return Promise.all([
    player1,
    player2
  ]).then((results) => {
    console.log(results);
    return playerSwap(results[0][0], results[1][0]);
  })
  .catch((error) => {
    console.log(error);
  })
}

function playerSwap(player1, player2) {
  const slot1 = player1.team_slot;
  const slot2 = player2.team_slot;
  return Promise.all([
    knex('players').where('id', player1.id).update({team_slot: slot2}),
    knex('players').where('id', player2.id).update({team_slot: slot1}),
  ]).then(results => {
    console.log(results);
  })
}

module.exports = {
  getAll, getSingle, update
};
