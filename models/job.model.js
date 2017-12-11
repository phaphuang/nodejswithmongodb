//import the mongoose package
const mongoose = require('mongoose');

//create JobSchema
const JobSchema = new mongoose.Schema({ //
  //add title property
  title : {
      //set title property to required
    type : String,
    required: true
  },

  //add description property
  description : {
    //set the type of description to string
    type: String
  },

  //add the duration property
  duration : {
    //set the type of duration to string
    type: String
  }
});

//export the instance of the model by passing JobSchema
module.exports = mongoose.model('Job', JobSchema);
