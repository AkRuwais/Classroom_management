const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = require("../../Util/DiskStorage");
const upload = multer({ storage: storage });
const register = require("../Model/Register");
const data = require("../Model/Home_page");

module.exports = {
  getHome: (req, res) => {
    try {
      res.send("Users will come here");
      // res.render(req.body);
    } catch (error) {
      console.log(error);
    }
  },
  postHome: async (req, res) => {
    try {
      console.log(req.body);
      const Home = await data.insertMany(
        ({
          Date,
          Attandance,
          Todays_task,
          Assignment,
          // My_Assignment: req.body.My_Assignment,
          Announcements_pdf,
          Announcements_images,
          Announcements_videos,
          Photos,
          Videos,
          Notes,
          Events,
          Messages,
          Discription,
        } = req.body)
      );
      res.send(req.body);
    } catch (error) {
      console.log(error);
    }
  },

  getLogin: (req, res) => {
    try {
      res.send("User can login here");
    } catch (error) {
      console.log(error);
    }
  },
  postLogin: async (req, res) => {
    try {
      const login = await register.insertMany(
        ({ Username, password } = req.body)
      );
      res.send(req.body);
    } catch (error) {
      console.log(error);
    }
  },

  getSignup: (req, res) => {
    try {
      res.send("User can register here");
    } catch (error) {
      console.log(error);
    }
  },
  postSignup: async (req, res) => {
    try {
      const signup = await register.insertMany(
        ({ Name, Username, Phone, Email, password } = req.body)
      );
      res.sent(req.body);
    } catch (error) {
      console.log(error);
    }
  },

  getTodaytask: (req, res) => {
    try {
      res.send("Today's tasks will show here");
    } catch (error) {
      console.log(error);
    }
  },
  postTodaytask: async (req, res) => {
    try {
      const tasks = await data.insertMany(({ Date, Todays_task } = req.body));
    } catch (error) {
      console.log(error);
    }
  },

  getAssignment: (req, res) => {
    try {
      res.send("Assignment will show here");
    } catch (error) {
      console.log(error);
    }
  },
  postAssignment: async (req, res) => {
    try {
      const assignment = await data.insertMany({
        Assignment: req.body.Assignment,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getAnnouncement: (req, res) => {
    try {
      res.sent("Announcement will show here");
    } catch (error) {
      console.log(error);
    }
  },
  postAnnouncement: async (req, res) => {
    try {
      const announcement = await data.insertMany(
        ({
          Date,
          Announcements_pdf,
          Announcements_images,
          Announcements_videos,
        } = req.body)
      );
    } catch (error) {
      console.log(error);
    }
  },

  getNotes: (req, res) => {
    try {
      res.sent("Notes will show here");
    } catch (error) {
      console.log(error);
    }
  },
  postNotes: async (req, res) => {
    try {
      const notes = await data.insertMany(({ date, Notes } = req.body));
    } catch (error) {
      console.log(error);
    }
  },

  getprofile: (req, res) => {
    try {
      res.send("Profile will show here");
    } catch (error) {
      console.log(error);
    }
  },
  postprofile: async (req, res) => {
    try {
      console.log(req.file.originalname);
      await data.insertMany(
        ({
          originalname,
          name,
          username,
          phonenumber,
          Parentname,
          parantnumber,
          DOB,
          std,
          dvision,
          gender,
        } = req.body)
      );
      const person = await data.find();
    } catch (error) {
      console.log(error);
    }
  },
};
