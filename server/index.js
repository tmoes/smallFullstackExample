const express = require('express');
let app = express();

const parser = require('body-parser');
const db = require('../database/index.js');
const axios = require('axios');
const mushroomData = require('../mushroomData.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json());
app.use(express.urlencoded({extended: true}));

db.save(mushroomData.mushroomData)
  .then( () => {
    console.log('db.save complete');
  })
  .catch( (err) => {
    console.log('.catch ---->', err);
  });

app.get('/Default', (req, res) => {
  db.getMushroomsByRegion('', (mushroomList) => {
    res.send(mushroomList);
  });
});

app.get('/Northwest', (req, res) => {
  db.getMushroomsByRegion('Northwest', (mushroomList) => {
    res.send(mushroomList);
  });
});

app.get('/Southwest', function (req, res) {
  db.getMushroomsByRegion('Southwest', (mushroomList) => {
    res.send(mushroomList);
  });
});

app.get('/Northeast', (req, res) => {
  db.getMushroomsByRegion('Northeast', (mushroomList) => {
    res.send(mushroomList);
  });
});

app.get('/Southeast', (req, res) => {
  db.getMushroomsByRegion('Southeast', (mushroomList) => {
    res.send(mushroomList);
  });
});

app.get('/Rocky_Mountains', (req, res) => {
  db.getMushroomsByRegion('Rocky_Mountains', (mushroomList) => {
    res.send(mushroomList);
  });
});

app.get('/Midwest', (req, res) => {
  db.getMushroomsByRegion('Midwest', (mushroomList) => {
    res.send(mushroomList);
  });
});

const port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});