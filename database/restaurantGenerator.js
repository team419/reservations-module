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

    const open = faker.random.number({ min: 8, max: 11 });
    const close = faker.random.number({ min: 21, max: 23 });

    const hours = {
      Monday: { opentime: open, closetime: close },
      Tuesday: { opentime: open, closetime: close },
      Wednesday: { opentime: open, closetime: close },
      Thursday: { opentime: open, closetime: close },
      Friday: { opentime: open, closetime: close },
      Saturday: { opentime: open, closetime: close },
      Sunday: { opentime: open, closetime: close },
    };

    data.hours = hours;

    const reservations = reservationGenerator();
    data.reservations = reservations;

    restaurantData.push(data);
  }
  return restaurantData;
};

module.exports = { restaurantGenerator };
