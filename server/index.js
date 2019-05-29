const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const path = require('path');

const port = 5555;

const app = express();

const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(cors());

// app.get('/all/:id', (req, res) => {
//   console.log('get get get it!');
//   db.getRestaurants(req.params.id, (data) => {
//     res.status(200).send(data);
//   });
// });

app.get('/all/:res_id', (req, res) => {
  console.log('get get get it!');
  db.fetch(req.params.res_id, data => res.json(data));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
