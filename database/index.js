const Sequelize = require('sequelize');

const sequelize = new Sequelize('yelp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

const restaurants = sequelize.define('restaurants', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  maxguest: Sequelize.INTEGER,
});

const openhours = sequelize.define('openhours', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  opentime: Sequelize.INTEGER,
  closetime: Sequelize.INTEGER,
  restaurants_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'restaurants',
      key: 'id',
    },
  },
});

const reservations = sequelize.define('reservations', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: Sequelize.DATE,
  time: Sequelize.DATE,
  numofguest: Sequelize.INTEGER,
  restaurants_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'restaurants',
      key: 'id',
    },
  },
});

restaurants.sync();
openhours.sync();
reservations.sync();

// const sync = sequelize.sync({ force: true });

module.exports = {
  restaurants,
  openhours,
  reservations,
};
