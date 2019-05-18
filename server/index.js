const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const port = 6666;

const app = express();

app.use(express.static('./client/dist'));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
