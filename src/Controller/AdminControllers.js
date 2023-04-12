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
      // console.log(JSON.stringify(admin));
      if (admin.name === req.body.name) {
        bcrypt.compare(req.body.password, admin.password).then((result) => {
          if (result) {
            res.send("HOME");
          } else {
            res.send("error password");
          }
        });
      } else {
        res.send("!!Error!!  please check username...");
      }
    } catch (error) {
      console.log("error");
    }
  },


  tutor: {
    get: (req, res) => {
      try {
        res.send("admin can add tutor in here");
      } catch (error) {
        console.log(error);
      }
    },
    post: async (req, res) => {
      try {
        const signup = await register.insertMany(
          ({ Name, Username, Phone, Email, password } = req.body)
        );
        res.sent(req.body);
      } catch (error) {
        console.log(error);
      }
    },
    put: async (req, res) => {
      try {
        const edit = await register.insertMany(
          ({ Name, Username, Phone, Email, password } = req.body)
        );
        res.sent(req.body);
      } catch (error) {
        console.log(error);
      }
    },
    delete: async (req, res) => {
      try {
        const id = req.params.id;
        await tutorsmodel.deleteOne({ _id: id }).then((result) => {
          console.log(result);
          res.redirect("/tutors");
        });
      } catch (error) {
        console.log(error);
      }
    },
  },

  student: {
    get: (req, res) => {
      try {
        res.send("admin can add student in here");
      } catch (error) {
        console.log(Error);
      }
    },
    post: async (req, res) => {
      try {
        const signup = await register.insertMany(
          ({ Name, Username, Phone, Email, password } = req.body)
        );
        res.sent(req.body);
      } catch (error) {
        console.log(Error);
      }
    },
    put: async (req, res) => {
      try {
        const edit = await register.insertMany(
          ({ Name, Username, Phone, Email, password } = req.body)
        );
        res.sent(req.body);
      } catch (error) {
        console.log(Error);
      }
    },
    delet: async (req, res) => {
      try {
        const id = req.params.id;
        await studentsmodel.deleteOne({ _id: id }).then((result) => {
          console.log(result);
          res.redirect("/students");
        });
      } catch (error) {
        console.log(Error);
      }
    },
  },
};
