//import the express app
const express = require('express');
// create the express application
const app = express();
// import body-parser
const bodyParser = require('body-parser');
const routes = require('./routes/index');

//import the mongoose module
const mongoose = require('mongoose');
//import config file
const config = require('./config/config.json')

app.use(bodyParser.json()); //req.body
app.use(bodyParser.urlencoded({extended: true})); //localhost:3000/jobs/?job_id=1&filters=1

//add custom middleware
app.use((req, res, next) => {
  //log the message, Custom Middleware run
  req.userId = 1;
  req.user = 'Aniwat';
  console.log('Middleware Run!!');
  //cal lthe next middleware
  next();
});

//set the root route
app.get('/',(req, res) => {
  console.log(req.user);
  console.log(req.userId);
  //and send the message hello world
  return res.send('Hello World!!');
});

app.use('/api', routes);

//connect the app to mongoose
mongoose.connect(config.MONGO_URI, () => {
  console.log('//your App is connected to MongoDB');
});

//listen the express app to port 3000
app.listen('3000', () => {
  console.log('Application is running on PORT 3000');
});
