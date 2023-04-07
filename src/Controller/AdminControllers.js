const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
      const hashedpass = await bcrypt.hash("classroom@2023", 10);
      // console.log(JSON.stringify(req.body));
      const admin = {
        name: "ADMIN",
        email: "adminone@gmail.com",
        password: hashedpass,
      };
      console.log(JSON.stringify(admin));
      if (admin.name === req.body.name) {
        bcrypt.compare(req.body.password, admin.password).then((result) => {
          if (result) {
            res.send("home");
          } else {
            res.send("error password");
          }
        });
      } else {
        res.send("!!Errro!!  please check username...");
      }
    } catch (error) {
      console.log("error");
    }
  },

  gettutor: (req, res) => {
    try {
      res.send("admin can add tutor in here");
    } catch (error) {
      console.log(error);
    }
  },
  posttutor: async (req, res) => {
    try {
      const signup = await register.insertMany(
        ({ Name, Username, Phone, Email, password } = req.body)
      );
      res.sent(req.body);
    } catch (error) {
      console.log(error);
    }
  },
  puttutor: async (req, res) => {
    try {
      const signup = await register.insertMany(
        ({ Name, Username, Phone, Email, password } = req.body)
      );
      res.sent(req.body);
    } catch (error) {
      console.log(error);
    }
  },
  deletetutor: async (req, res) => {
    try {
      const id = req.params.id;
      await studentsmodel.deleteOne({ _id: id }).then((result) => {
        console.log(result);
        res.redirect("/students");
      });
    } catch (error) {
      console.log(error);
    }
  },

  // student:{
  //   get:(req,res)=>{}
};
