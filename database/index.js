const mongoose = require('mongoose');

const { restaurantGenerator } = require('./restaurantGenerator');

mongoose.connect('mongodb://localhost:27017/restaurant_info', { useNewUrlParser: true });

const restaurantSchema = mongoose.Schema({
  res_id: Number,
  name: String,
  max_guest: Number,
  hours: {
    Monday: { opentime: Number, closetime: Number },
    Tuesday: { opentime: Number, closetime: Number },
    Wednesday: { opentime: Number, closetime: Number },
    Thursday: { opentime: Number, closetime: Number },
    Friday: { opentime: Number, closetime: Number },
    Saturday: { opentime: Number, closetime: Number },
    Sunday: { opentime: Number, closetime: Number },
  },
  reservations: [{
    date: Date,
    time: Number,
    numofguest: Number,
  }],
});

const Restaurants = mongoose.model('restaurants', restaurantSchema);

Restaurants.collection.drop(() => { });

const arrayOfReservations = restaurantGenerator();

Restaurants.insertMany(arrayOfReservations)
  .then(() => {
    console.log('updated');
  })
  .catch(() => {
    console.log('fail');
  });


// const getAllRestaurant = id => new Promise((resolve, reject) => {
//   Restaurants.find({ id }, (err, doc) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(doc);
//     }
//   });
// });

// module.exports = { getAllRestaurant };
