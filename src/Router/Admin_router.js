const express = require("express");
const router = express.Router();
const controller = require("../Controller/AdminControllers");

router.get("/login", controller.getlogin);
router.post("/login", controller.postlogin);

module.exports = router;
