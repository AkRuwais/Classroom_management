const express = require("express");
const router = express.Router();


const login = require("../Model/Register");
const controller = require("../Controller/UserControllers");

// router.get("/user", controller.getHome);
router.post("/user", controller.postHome);

router.get("/userlogin", controller.getLogin);
router.post("/userlogin", controller.postLogin);

router.get("/usersignup", controller.getSignup);
router.post("/usersignup", controller.postSignup);

router.get("usertask", controller.getTodaytask);
router.post("/usertask", controller.postTodaytask);

router.get("/userassignment", controller.getAssignment);
router.post("/userassignment", controller.postAssignment);

router.get("/userannouncement", controller.getAnnouncement);
router.post("/userannouncement", controller.postAnnouncement);

router.get("/usernotes", controller.getNotes);
router.post("/usernotes", controller.postNotes);

module.exports = router;
