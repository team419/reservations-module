const faker = require('faker');
const db = require('./index');

const restaurantsData = [];
const openhoursData = [];
const reservationsData = [];

for (let i = 0; i < 100; i += 1) {
  const restaurants = {
    name: faker.system.fileName(),
    maxguest: faker.random.number({ min: 50, max: 200 }),
  };
  restaurantsData.push(restaurants);
}

for (let j = 0; j < 7; j += 1) {
  const restaurantsId = faker.random.number({ min: 1, max: 100 });
  const openhours = {
    restaurantsId,
    opentime: faker.random.number({ min: 8, max: 11 }),
    closetime: faker.random.number({ min: 21, max: 23 }),
  };
  openhoursData.push(openhours);
}

console.log(restaurantsData);

for (let j = 0; j < 10; j += 1) {
  const dateRange = faker.date.between('2019-05-01', '2019-08-31');
  const dateFormat = dateRange.toDateString();
  const reservations = {
    restaurants_id: faker.random.number({ min: 1, max: 100 }),
    date: dateFormat,
    time: faker.random.number({ min: 18, max: 20 }),
    numofguest: faker.random.number({ min: 1, max: 10 }),
  };
  reservationsData.push(reservations);
}

for (let i = 0; i < restaurantsData.length; i += 1) {
  db.restaurants.create(restaurantsData[i])
    .then(() => {
      console.log(restaurantsData.length);
    });
}

for (let i = 0; i < openhoursData.length; i += 1) {
  db.openhours.create(openhoursData[i])
    .then(() => {
      console.log(openhoursData.length);
    });
}

for (let i = 0; i < reservationsData.length; i += 1) {
  db.reservations.create(reservationsData[i])
    .then(() => {
      console.log(reservationsData.length);
    });
}
