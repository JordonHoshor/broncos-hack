const express = require('express');
const router = express.Router();
const sphero = require('sphero');

const orb = sphero('/dev/tty.Sphero-PRO-RN-SPP');
// const orb2 = sphero('/dev/tty.Sphero-RWB-RN-SPP');

orb.connect(() => {
  orb.color('#648FCC');
});

router.get('/roll', rollSphero);
router.get('/:speed/:direction/:time', raceSphero);
router.get('/roundtrip', roundtrip);

function roundtrip (req, res, next) {
  orb.roll(75, 0);
  setTimeout(function() {
    orb.roll(75, 270);
  }, 1000);
  setTimeout(function() {
    orb.roll(75, 180);
  }, 2000);
  setTimeout(function() {
    orb.roll(75, 90);
  }, 3000);
};

function rollSphero () {
  return setTimeout(() => {
    orb.roll(1000, 0);
  }, 100)
}

function raceSphero (req, res, next) {
  const speed = req.params.speed;
  const direction = req.params.direction;
  const time = req.params.time;

  setTimeout(() => {
    orb.roll(speed, direction);
  }, time);
}

module.exports = router;
