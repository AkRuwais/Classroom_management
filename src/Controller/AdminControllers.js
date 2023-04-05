const admin = require("../Model/adminprofil");

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
      console.log(req.body);
      const login = await admin.findOne({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.send(req.body);
    } catch (error) {
      console.log(error);
    }
  },
};
