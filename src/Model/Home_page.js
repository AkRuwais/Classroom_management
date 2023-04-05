const mongoose = require("mongoose");
// const schema = mongoose.Schema;

const data = new mongoose.Schema({
  Date: {
    type: Date,
    require: true,
  },
  Attandance: {
    type: Boolean,
    require: true,
  },
  Todays_task: {
    type: String,
    require: true,
  },
  Assignment: {
    type: String,
    require: true,
  },
  My_Assignment: {
    type: String,
  },
  Announcements_pdf: {
    type: String,
  },
  Announcements_images: {
    type: String,
  },
  Announcements_videos: {
    type: String,
  },
  Photos: {
    type: String,
  },
  Videos: {
    type: String,
  },
  Notes: {
    type: String,
  },
  Events: {
    type: String,
  },
  Messages: {
    type: String,
  },
  Discription: {
    type: String,
  },
});

module.exports = mongoose.model("User", data);
