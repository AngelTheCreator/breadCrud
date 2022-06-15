const express = require("express");
const mongoose = require("mongoose");
// DEPENDENCIES
const methodOverride = require('method-override')


// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.use(express.static("public")); // Exposing the public folder to the client
app.use(express.urlencoded({ extended: true })); // Encoding your requests so they are Javascript formatted
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine()); // Allowing your server to read your views// MIDDLEWARE
app.use(methodOverride('_method'))



// Routes
app.get("/", (req, res) => {
  res.send("<h1>BreadCrud</h1>");
});

// Breads
const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);

//bakers
const bakersController = require("./controllers/bakers_controller.js")
app.use('/bakers', bakersController)

// 404 Page
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});

//Mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
  () => {console.log('connected to mongo: ' + process.env.MONGO_URI)}
  );