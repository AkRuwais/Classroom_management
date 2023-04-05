const express = require("express");
const router = express.Router();

const controller = require("../Controller/AdminControllers");

router.get("/admin", controller.getlogin);
router.post("/admin", controller.postlogin);

module.exports = router;
