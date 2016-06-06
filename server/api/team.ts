"use strict";
var express = require('express');
var config_1 = require('../config');
var app = express();
app.get(/\/client.{0,}\/.+\.jade/, function (req, res, next) {
    res.render(config_1.config.root + req.path);
});
app.use('/scripts', express.static('bower_components'));
app.use('/client', express.static('client'));
app.get('/', function (req, res, next) {
    res.sendFile(config_1.config.client + '/index.html');
});
var teams = [
    {
        id: 1,
        firstName: 'Stephen',
        lastName: 'Curry',
        age: 28,
        sport: 'basketball',
        position: 'point guard',
        height: 6.3,
        weight: 160,
        number: 30,
        image: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
        teamName: 'Warriors',
        college: 'Harvard',
        nationality: 'American',
    },
    {
        id: 2,
        firstName: 'Kobe',
        lastName: 'Bryant',
        age: 28,
        sport: 'basketball',
        position: 'point guard',
        height: 6.4,
        weight: 120,
        number: 12,
        image: 'https://i.ytimg.com/vi/YtfZeoFU0J0/maxresdefault.jpg',
        teamName: 'Lakers',
        college: 'American Dream Academy',
        nationality: 'American',
    },
    {
        id: 3,
        firstName: 'Nicole',
        lastName: 'Garcia',
        age: 20,
        sport: 'volleyball',
        position: 'spiker',
        height: 5.9,
        weight: 111,
        number: 12,
        image: 'http://mybestidolsph.weebly.com/uploads/2/0/0/1/20012051/9172289.jpg?309',
        teamName: 'Tambay',
        college: 'Nicole Academy',
        nationality: 'Filipino',
    },
    {
        id: 4,
        firstName: 'Colin',
        lastName: 'Kaepernick',
        age: 20,
        sport: 'football',
        position: 'quarterback',
        height: 6.3,
        weight: 200,
        number: 12,
        image: 'http://s11.postimg.org/xds0zkjur/article_2602738_1_D02194100000578_544_634x544.jpg',
        teamName: '49ers',
        college: 'University of California',
        nationality: 'American',
    },
}
app.get('/api/v1/players', function (req, res, next) {
    res.json(players);
});
app.get('/api/v1/players/:id', function (req, res, next) {
    var team = team.filter(function (item) { return item.id == req.params['id']; })[0];
    if (team)
        res.json(team);
    else
        res.sendStatus(404);
});
app.delete('/api/v1/team/:id', function (req, res, next) {
    team = team.filter(function (item) { return item.id != req.params['id']; });
    res.end();
});
app.get(/\/(client|scripts|api).{0,}/, function (req, res, next) {
    res.sendStatus(404);
});
app.get('/*', function (req, res, next) {
    res.sendFile(config_1.config.client + '/index.html');
});
app.use(function (req, res, next) {
    res.sendStatus(404);
});
app.listen(3000, function () {
    console.log('Server is listening on localhost:3000');
});
