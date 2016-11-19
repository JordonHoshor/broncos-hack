const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
const query = require('../db/util/util.js');
// const knex = require('../db/knex.js');

router.get('/', getPlayers);
router.get('/:id', getSinglePlayer);
router.put('/:id', rosterUpdate);

function getPlayers (req, res, next) {
  query.getAll('players')
  .then((results) => {
    res.status(200).json({
      data: results
    })
  })
  .catch((error) => {
    res.status(400).json({
      message: 'Not Found'
    })
  });
}

function getSinglePlayer (req, res, next) {
  const id = parseInt(req.params.id);
  query.getSingle('players', id)
  .then((results) => {
    res.status(200).json({
      data: results
    })
  })
  .catch((error) => {
    res.status(400).json({
      message: 'Not Found'
    })
  })
}

function rosterUpdate(req, res, next) {
  const id = parseInt(req.params.id);
  query.update('players', req.body.team_slot, id)
  .then((results) => {
    res.status(200).json({
      message: 'Player was updated'
    })
  })
  .catch((error) => {
    res.status(400).json({
      message: 'Player not found'
    })
  })
}

module.exports = router;
