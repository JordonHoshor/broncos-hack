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

function rollSphero () {
  return orb.roll(100, 0);
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
