const mongoose = require('mongoose')

// Defining schema of person
const personSchema= new mongoose.Schema({
     name:{
          type : String,
          required : true
     },
     age:{
          type: Number
     },
     work:{
          type: String,
          enum: ['Chef','Waiter','Manager'],
          required: true
     },
     mobile: {
          type: String,
          required: true
     },
     email:{
          type:String,
          required:true,
          unique: true
     },
     address:{
          type:String
     },
     salary:{
          type:Number,
          required:true
     }
});

// create person model
const Person= mongoose.model('Person',personSchema);
module.exports=Person;









































