const mongoose = require("mongoose");

const data = new mongoose.Schema({
  picture:{
    type:String
  },
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  parentname: {
    type: String,
  },
  phonenumber: {
    type: Number,
    require: true,
  },
  parantnumber: {
    type: Number,
  },
  DOB: {
    type: Date,
  },
  class: {
    type: String,
  },
  dvision: {
    type: String,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirm_password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("register", data);
