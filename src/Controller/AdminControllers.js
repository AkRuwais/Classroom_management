// const admin = require("../Model/adminprofil");
const jwt = require("jsonwebtoken");

module.exports = {
  getlogin: (req, res) => {
    try {
      res.send("ADMIN will come here");
    } catch (error) {
      console.log(error);
    }
  },
  postlogin: async (req, res) => {
    try {
      // console.log(JSON.stringify(req.body));
      const admin = {
        name: "ADMIN",
        email: "adminone@gmail.com",
        password: "classroom@2023",
      };
      console.log(JSON.stringify(admin));
      if (JSON.stringify(admin) === JSON.stringify(req.body)) {
        res.send("home");
      } else {
        res.send("!!Errro!!  please check onetime...");
      }
    } catch (error) {
      console.log("error");
    }
  },
};
