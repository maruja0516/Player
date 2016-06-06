import * as express from 'express';
import * as player from './api/players/router';
import { config } from '../config';
let app = express();

Player.seed()

app.get(/\/client.{0,}\/.+\.jade/, (req, res, next) => {
  res.render(config.root + req.path);
});

// access /bower_components via /scripts/...
app.use('/scripts', express.static('bower_components'));
app.use('/client', express.static('client'));

app.get('/', (req, res, next) => {
  res.sendFile(config.client + '/index.html');
});

app.use(require('body-parser')());



app.get('/api/v1/players', (req, res, next) => {
  res.json(players);
});

app.get('/api/v1/players/:id', (req, res, next) => {
  let player = players.filter((item) => item.id == req.params['id'])[0];
  if (player) res.json(player);
  else res.sendStatus(404);
});

app.delete('/api/v1/players/:id', (req, res, next) => {
  players = players.filter((item) => item.id != req.params['id']);
  res.end();
});

app.get(/\/(client|scripts|api).{0,}/, (req, res, next) => {
  res.sendStatus(404);
});

app.get('/*', (req, res, next) => {
  res.sendFile(config.client + '/index.html');
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000, () => {
  console.log('Server is listening on localhost:3000');
});
