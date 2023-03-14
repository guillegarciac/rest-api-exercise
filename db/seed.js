require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Shows = require('../models/Show');
const MONGO_URL = 'mongodb+srv://admin:admin@cluster0.bm9ztay.mongodb.net/tvshow-db';
const shows = require('../data/shows');

// Import data to seed

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(() => { 
    return Shows.deleteMany();
  })
  .then(() => {
    console.log(shows)
    return Shows.create(shows)
  })
  .then(createdShows => console.log(`Inserted ${createdShows.length} shows in the database`))
  .then(() => mongoose.connection.close())
  .catch(err => console.error(err))