const mongoose = require("mongoose");
const profileschema = new mongoose.Schema({
  name: {
    type: String,
    default: "ADMIN",
  },
  email: {
    type: String,
    default: "adminone@gmail.com",
  },
  password: {
    type: String,
    default: "classroom@2023",
  },
});
const adminprofile = mongoose.model("adminprofile", profileschema);
module.exports = adminprofile;
