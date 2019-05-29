/* eslint-disable camelcase */
const faker = require('faker');

const { reservationGenerator } = require('./reservationGenerator');

const restaurantGenerator = () => {
  const restaurantData = [];
  for (let i = 0; i < 100; i += 1) {
    const data = {};

    const res_id = i + 1;
    data.res_id = res_id;

    const name = faker.system.fileName();
    data.name = name;

    const max_guest = faker.random.number({ min: 50, max: 200 });
    data.max_guest = max_guest;

    const amopen = faker.random.number({ min: 7, max: 11 });
    const amclose = faker.random.number({ min: 12, max: 15 });
    const pmopen = faker.random.number({ min: 15, max: 18 });
    const pmclose = faker.random.number({ min: 20, max: 23 });

    const hours = {
      morning: { opentime: amopen, closetime: amclose, },
      afternoon: { opentime: pmopen, closetime: pmclose, },
    };

    data.hours = hours;

    const reservations = reservationGenerator();
    data.reservations = reservations;

    restaurantData.push(data);
  }
  return restaurantData;
};

module.exports = { restaurantGenerator };
