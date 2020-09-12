const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// mongoose.connect('mongodb+srv://RadioJackie:FDZ273KJSrWHVrtl@cluster0.cpklf.mongodb.net/PWA-Budget-Tracker?retryWrites=true&w=majority'
//   , {
//   useNewUrlParser: true,
//   useFindAndModify: false
// }).then(data => console.log("connected")).catch(data => console.log("not connected")) 
// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
// mongodb+srv://RadioJackie:FDZ273KJSrWHVrtl@cluster0.ew3kt.azure.mongodb.net/Project-0?retryWrites=true&w=majority
//FDZ273KJSrWHVrtl