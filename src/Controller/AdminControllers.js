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

  gettutor:(req,res)=>{
    try {
      res.send("admin can add tutor in here")
    } catch (error) {
      console.log(error
        );
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
  puttutor:async(req,res)=>{
    try {
      const signup = await register.insertMany(
        ({ Name, Username, Phone, Email, password } = req.body)
      );
      res.sent(req.body);
    } catch (error) {
      console.log(error);
    }
  },
  deletetutor:async(req,res)=>{
    try {
    const id = req.params.id
    await studentsmodel.deleteOne({_id:id}).then(result=>{
    console.log(result);
    res.redirect('/students')
    })
    } catch (error) {
    console.log(error);
    }
    
},


// student:{
//   get:(req,res)=>{}
}
