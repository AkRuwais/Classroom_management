const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = require("../../Util/DiskStorage");
const upload = multer({ storage: storage });
const register = require("../Model/Register");
const tutor = require("../Model/Tutor");
const data = require("../Model/Home_page");
const jwt = require("jsonwebtoken");
// const { post } = require("../Router/User_router");
// const { getLogin } = require("./UserControllers");

module.exports = {
  getHome: (req, res) => {
    try {
      res.send("Tutor will come here");
    } catch (error) {
      console.log(error);
    }
  },
  postHome: async (req, res) => {
    try {
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
      res.send("Tutor can login here");
    } catch (error) {
      console.log(error);
    }
  },
  postLogin: async (req, res) => {
    try {
      const login = await tutor.find({
        Username: req.body.username,
        password: req.body.password,
      });
      if (login) {
        const encode = jwt.sign({ id: login[0]._id }, "ruwais");
        console.log(encode, login[0]._id);
        res.cookie("tutor", { encode }, { httpOnly: true });
        res.status(200).json("sucsess");
      } else {
        res.status(404).json("tutor not found");
      }
      // res.send(req.body);
    } catch (error) {
      console.log(error);
    }
  },

  getSignup: (req, res) => {
    try {
      res.send("Tutor can register here");
    } catch (error) {
      console.log(error);
    }
  },
  postSignup: async (req, res) => {
    try {
      const signup = await new tutor(
        ({ name, username, phone, email, password } = req.body)
      ).save();
      res.status(200).json("Sucsess");
    } catch (error) {
      console.log(error);
    }
  },

  getclass: (req, res) => {
    try {
      res.send("Tutor can select class here");
    } catch (error) {
      console.log(error);
    }
  },
  postclass: async (req, res) => {
    try {
      const signup = await register.insertMany({
        class: req.body.std,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getAttendance: (req, res) => {
    try {
      res.send("Tutor can check students attendance here");
    } catch (error) {
      console.log(error);
    }
  },

  getstudent: (req, res) => {
    try {
      res.send("User can register here");
    } catch (error) {
      console.log(error);
    }
  },
  postaddstudent: async (req, res) => {
    try {
      const signup = await register.insertMany(
        ({ Name, Username, Phone, Email, password } = req.body)
      );
      res.sent(req.body);
    } catch (error) {
      console.log(error);
    }
  },
  editstudent: async (req, res) => {
    try {
      const edit = await register.insertMany(
        ({ Name, Username, Phone, Email, password } = req.body)
      );
      res.sent(req.body);
    } catch (error) {
      console.log(error);
    }
  },
  deletestudent: async (req, res) => {
    try {
      let studentId = req.params.id;
      console.log(studentId);
      await studentId.deleteOne({ _id: studentId }).then((result) => {
        console.log(result + "student deleted");
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
};
