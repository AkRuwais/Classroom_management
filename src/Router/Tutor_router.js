const express = require("express");
const router = express.Router();
const login = require("../Model/Register");
const controller = require("../Controller/TutorController");

// const {students,
//     attentence,
//     assignment
// }=require('../Controller/TutorController')

router.get("/tutor", controller.getHome);
router.post("/tutor", controller.postHome);

// router.get("/tutorlogin",controller.getLogin)
router.post("/tutorlogin", controller.postLogin);

// router.get("/tutorsignup",controller.getSignup)
router.post("/tutorsignup", controller.postSignup);

// router.get("/tutorclass",controller.getclass)
router.post("/tutorclass", controller.postclass);

router.get("/attendance", controller.getAttendance);
// router.post("/",controller.post )

// router.get("/studentadd",controller.getstudent)
router.post("/studentadd", controller.postaddstudent);

// router.get("/studentedit",controller.getstudent)
router.put("/studentedit", controller.editstudent);

// router.get("/studentdelete",controller.getstudent)
router.delete("/studentdelete", controller.deletestudent);

// router.get("/",controller.getAssignment)
router.post("/", controller.postAssignment);
// router.post("/", assignment.get);
// router.post("/", assignment.post);

module.exports = router;
