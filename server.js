const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

const app = express();
const API_PORT = process.env.PORT;
const MONGO_URI = 'mongodb://localhost:27017/taskdiary';

/*
const Color = require('./models/Color');
Color.deleteMany({}, (err, docs) => {
  if (err) console.log(err);
  else console.log(docs);
});
*/

/*
const Color = require('./models/Color');
Color.remove({});

Color.create({ hex: '#d32f2f' });
Color.create({ hex: '#c2185b' });
Color.create({ hex: '#7b1fa2' });
Color.create({ hex: '#1976d2' });
Color.create({ hex: '#512da8' });
Color.create({ hex: '#00897b' });
Color.create({ hex: '#388e3c' });
Color.create({ hex: '#f57c00' });
*/

/*if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}*/

app.use(express.json());

app.use(logger = (req, res, next) => {
  console.log('GOT REQUEST!');
  next();
});

// Initializes the Passport configuration
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Connect to Mongo
mongoose.connect( MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to the MongoDB.'))
  .catch(err => console.log(err));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Root Router
app.use('/', require('./routes'));

app.listen(API_PORT, () => console.log(`Server started on the port: ${API_PORT}`));
