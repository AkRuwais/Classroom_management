const express = require("express");
const router = express.Router();
const login = require("../Model/Register");
const controller = require("../Controller/UserControllers");

router.get("/user", controller.getHome);
router.post("/user", controller.postHome);

router.get("/login", controller.getLogin);
router.post("/login", controller.postLogin);

router.get("/signup", controller.getSignup);
router.post("/signup", controller.postSignup);

// router.get("task", controller.getTodaytask);
router.post("/task", controller.postTodaytask);

// router.get("/assignment", controller.getAssignment);
router.post("/assignment", controller.postAssignment);

// router.get("/announcement", controller.getAnnouncement);
router.post("/announcement", controller.postAnnouncement);

// router.get("/notes", controller.getNotes);
router.post("/notes", controller.postNotes);

module.exports = router;
