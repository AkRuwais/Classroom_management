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
      const Home = await data.insertMany({
        Date: req.body.Date,
        Attandance: req.body.Attandance,
        Todays_task: req.body.Todays_task,
        Assignment: req.body.Assignment,
        // My_Assignment: req.body.My_Assignment,
        Announcements_pdf: req.body.Announcements_pdf,
        Announcements_images: req.body.Announcements_images,
        Announcements_videos: req.body.Announcements_videos,
        Photos: req.body.Photos,
        Videos: req.body.Videos,
        Notes: req.body.Notes,
        Events: req.body.Events,
        Messages: req.body.Messages,
        Discription: req.body.Discription,
      });
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
      const login = await register.insertMany({
        username: req.body.Username,
        password: req.body.password,
      });
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
      const signup = await register.insertMany({
        Name: req.body.Name,
        Username: req.body.Username,
        Phone: req.body.Phone,
        Email: req.body.Email,
        password: req.body.password,
      });
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
      const tasks = await data.insertMany({
        Date: req.body.Date,
        Todays_task: req.body.Todays_task,
      });
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
      const announcement = await data.insertMany({
        Date: req.body.Date,
        Announcements_pdf: req.body.Announcements_pdf,
        Announcements_images: req.body.Announcements_images,
        Announcements_videos: req.body.Announcements_videos,
      });
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
      const notes = await data.insertMany({
        Date: req.body.date,
        Notes: req.body.Notes,
      });
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
