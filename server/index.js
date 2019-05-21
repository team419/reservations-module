const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const port = 6666;

const app = express();

const db = require('../database/index.js');

app.use(express.static('./client/dist'));
app.use(bodyParser.json());
app.use(cors());

app.get('/all/:id', (req, res) => {
  console.log('get get get it!');
  db.getRestaurants(req.params.id, (data) => {
    res.status(200).send(data);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
