const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Username: {
    type: String,
  },
  Phone: {
    type: String,
  },
  Email: {
    type: String,
  },
  password: {
    type: String,
  },
});
module.exports = mongoose.model("tutor", schema);
