const bodyparser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//---------------URLencoded-------------------------

const { urlencoded } = require("body-parser");
app.use(urlencoded({ extended: true }));
app.use(bodyparser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//---------------ENV--------------------------------

require("dotenv").config({ path: "./.env" });
const PORT = process.env.PORT;
const key = process.env.MONGO_CON;

//---------------ATLAS connected to server----------

mongoose.connect(key).then(() => console.log("Database connected ---"));

//---------------APLOADS----------------------------

app.use(express.static(__dirname + "/public"));
app.use(express.static("uploads"));
app.use("/uploads", express.static(__dirname + "/uploads"));

//---------------HOME page--------------------------

const Home = require("./src/Router/User_router");
app.use("/user", Home);

//---------------TOTUR page-------------------------

const Tutor = require("./src/Router/Tutor_router");
app.use("/tutor", Tutor);

//---------------Admin page-------------------------

const Admin = require("./src/Router/Admin_router");
app.use("/admin", Admin);

//---------------STRT the server--------------------

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
