const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
const query = require('../db/util/util.js');
// const knex = require('../db/knex.js');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

router.get('/', getPlayers);
router.get('/:id', getSinglePlayer);
router.get('/position/:position', getPosition);
router.get('/racers/:id/:id2', setRacers);
router.get('/:id/:id2', rosterUpdate);

function getPlayers (req, res, next) {
  query.getAll('players')
  .then((results) => {
    res.status(200).json({
      data: results
    });
  })
  .catch((error) => {
    res.status(400).json({
      message: 'Not Found'
    });
  });
}

function getSinglePlayer (req, res, next) {
  const id = parseInt(req.params.id);
  query.getSingle('players', id)
  .then((results) => {
    res.status(200).json({
      data: results
    });
  })
  .catch((error) => {
    res.status(400).json({
      message: 'Not Found'
    });
  });
}

function getPosition (req, res, next) {
  const position = req.params.position;
  query.position(position)
  .then((results) => {
    res.status(200).json({
      data: results
    });
  })
  .catch((error) => {
    res.status(400).json({
      message: 'Not Found'
    });
  });
}

function setRacers (req, res, next) {
  const id = parseInt(req.params.id);
  const id2 = parseInt(req.params.id2);
  query.racers('players', id, id2)
  .then((results) => {
    res.status(200).json({
      data: 'Players ready to race!'
    });
  })
  .catch((error) => {
    res.status(400).json({
      message: 'Players not found'
    });
  });
}

function rosterUpdate(req, res, next) {
  const id = parseInt(req.params.id);
  const id2 = parseInt(req.params.id2);
  query.update('players', id, id2)
  .then((results) => {
    res.status(200).json({
      data: 'Roster updated'
    });
  })
  .catch((error) => {
    res.status(400).json({
      message: 'Player not found'
    });
  });
}

module.exports = router;
