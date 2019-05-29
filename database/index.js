const mongoose = require('mongoose');

const { restaurantGenerator } = require('./restaurantGenerator');

mongoose.connect('mongodb://localhost:27017/restaurant_info', { useNewUrlParser: true });

const restaurantSchema = mongoose.Schema({
  res_id: Number,
  name: String,
  max_guest: Number,
  hours: {
    morning: { opentime: Number, closetime: Number, },
    afternoon: { opentime: Number, closetime: Number, },
  },
  reservations: [{
    date: String,
    time: Number,
    numofguest: Number,
  }],
});

const Restaurants = mongoose.model('restaurants', restaurantSchema);

Restaurants.collection.drop(() => { });

const arrayOfReservations = restaurantGenerator();

Restaurants.insertMany(arrayOfReservations)
  .then(() => {
    console.log('restaurants updated!');
  })
  .catch(() => {
    console.log('got nothing!');
  });

const fetch = (id, cb) => {
  Restaurants.find({ res_id: id }, (err, restaurants) => {
    if (err) {
      console.log(err);
    } else {
      cb(restaurants);
    }
  });
};

module.exports = { fetch };
