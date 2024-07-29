const express = require("express");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 2999;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const homeRoute = require("./routes/home");
const newMessageRoute = require("./routes/new");
const currentMessageRoute = require("./routes/message");

app.use("/", homeRoute);
app.use("/new", newMessageRoute);
app.use("/messages", currentMessageRoute);

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
