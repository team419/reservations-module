const connection = require('./index.js');

const getAll = (res) => {
  connection.query('SELECT * FROM restaurants', (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  getAll,
};
