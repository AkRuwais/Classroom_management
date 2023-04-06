const express = require("express");
const router = express.Router();

const controller = require("../Controller/AdminControllers");

router.get("/adminlogin", controller.getlogin);
router.post("/adminlogin", controller.postlogin);

module.exports = router;
