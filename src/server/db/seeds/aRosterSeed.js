
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('players').insert({
          team_slot: 'QB',
          name: 'Marcus Mariota',
          position: 'QB',
          nfl_team: 'Titans',
          team_color_r: 100,
          team_color_g: 143,
          team_color_b: 204,
          injury_status: 'Healthy',
          projected_points: 19
        }),
        knex('players').insert({
          team_slot: 'RB1',
          name: 'Latavius Murray',
          position: 'RB',
          nfl_team: 'Raiders',
          team_color_r: 0,
          team_color_g: 0,
          team_color_b: 0,
          injury_status: 'Questionable',
          projected_points: 11
        }),
        knex('players').insert({
          team_slot: 'RB2',
          name: 'Jay Ajayi',
          position: 'RB',
          nfl_team: 'Dolphins',
          team_color_r: 0,
          team_color_g: 141,
          team_color_b: 151,
          injury_status: 'Healthy',
          projected_points: 15
        }),
        knex('players').insert({
          team_slot: 'WR1',
          name: 'Jordy Nelson',
          position: 'WR',
          nfl_team: 'Packers',
          team_color_r: 255,
          team_color_g: 182,
          team_color_b: 18,
          injury_status: 'Healthy',
          projected_points: 15
        }),
        knex('players').insert({
          team_slot: 'WR2',
          name: 'Davante Adams',
          position: 'WR',
          nfl_team: 'Packers',
          team_color_r: 255,
          team_color_g: 182,
          team_color_b: 18,
          injury_status: 'Healthy',
          projected_points: 13
        }),
        knex('players').insert({
          team_slot: 'TE',
          name: 'Kyle Rudolph',
          position: 'TE',
          nfl_team: 'Vikings',
          team_color_r: 59,
          team_color_g: 1,
          team_color_b: 96,
          injury_status: 'Healthy',
          projected_points: 8
        }),
        knex('players').insert({
          team_slot: 'FLEX',
          name: 'Doug Baldwin',
          position: 'WR',
          nfl_team: 'Seahawks',
          team_color_r: 105,
          team_color_g: 190,
          team_color_b: 40,
          injury_status: 'Healthy',
          projected_points: 13
        }),
        knex('players').insert({
          team_slot: 'DEF',
          name: 'Dolphins',
          position: 'DEF',
          nfl_team: 'Dolphins',
          team_color_r: 0,
          team_color_g: 141,
          team_color_b: 151,
          injury_status: 'Healthy',
          projected_points: 8
        }),
        knex('players').insert({
          team_slot: 'K',
          name: 'Caleb Sturgis',
          position: 'K',
          nfl_team: 'Eagles',
          team_color_r: 0,
          team_color_g: 59,
          team_color_b: 72,
          injury_status: 'Healthy',
          projected_points: 8
        }),
        knex('players').insert({
          team_slot: 'Bench',
          name: 'Rob Gronkowski',
          position: 'TE',
          nfl_team: 'Patriots',
          team_color_r: 13,
          team_color_g: 37,
          team_color_b: 76,
          injury_status: 'Out',
          projected_points: 0
        }),
        knex('players').insert({
          team_slot: 'Bench',
          name: 'Carson Palmer',
          position: 'QB',
          nfl_team: 'Cardinals',
          team_color_r: 155,
          team_color_g: 39,
          team_color_b: 67,
          injury_status: 'Healthy',
          projected_points: 13
        }),
        knex('players').insert({
          team_slot: 'Bench',
          name: 'Willie Snead',
          position: 'WR',
          nfl_team: 'Saints',
          team_color_r: 210,
          team_color_g: 184,
          team_color_b: 135,
          injury_status: 'Healthy',
          projected_points: 13
        }),
        knex('players').insert({
          team_slot: 'Bench',
          name: 'Terrance West',
          position: 'RB',
          nfl_team: 'Ravens',
          team_color_r: 40,
          team_color_g: 3,
          team_color_b: 83,
          injury_status: 'Healthy',
          projected_points: 13
        }),
        knex('players').insert({
          team_slot: 'Bench',
          name: 'Panthers',
          position: 'DEF',
          nfl_team: 'Panthers',
          team_color_r: 0,
          team_color_g: 136,
          team_color_b: 206,
          injury_status: 'Healthy',
          projected_points: 6
        }),
        knex('players').insert({
          team_slot: 'Bench',
          name: 'Rishard Matthews',
          position: 'WR',
          nfl_team: 'Titans',
          team_color_r: 100,
          team_color_g: 143,
          team_color_b: 204,
          injury_status: 'Healthy',
          projected_points: 11
        }),
        knex('players').insert({
          team_slot: 'Bench',
          name: 'Christine Michael',
          position: 'RB',
          nfl_team: 'Packers',
          team_color_r: 255,
          team_color_g: 182,
          team_color_b: 18,
          injury_status: 'Healthy',
          projected_points: 0
        })
      ]);
    });
};
