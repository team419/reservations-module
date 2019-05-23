const faker = require('faker');

const reservationGenerator = () => {
  const reservationsData = [];
  for (let i = 0; i < 10; i += 1) {
    const dateRange = faker.date.between('2019-05-01', '2019-08-31');
    const dateFormat = dateRange.toDateString();
    const reservations = {
      date: dateFormat,
      time: faker.random.number({ min: 18, max: 20 }),
      numofguest: faker.random.number({ min: 1, max: 10 }),
    };
    reservationsData.push(reservations);
  }
  return reservationsData;
};

module.exports = { reservationGenerator };
