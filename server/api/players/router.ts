import * as express from 'express';
import * as controller from './controller'
let router = express.Route();

// base URL----/api/v1/players


//GET: //api/v1/player/:id
router.get('/', controller.getAll);
//:id -> unique player ID
router.get
});
//Delete: /api/v1/players/:id
//id -> unique player ID
router.get('/api/v1/players/:id', (req, res, next) => {
  let player = Player.player.filter((item) => item.id ==
  req.params['id']) [0]
  if(player) {
    res.json(player);
  } else {
    res.end();
  });
