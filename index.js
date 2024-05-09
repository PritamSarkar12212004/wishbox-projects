// * require files modules
const express = require("express");
const ejsMate = require("ejs-mate");
const path = require("path");
require("dotenv").config();
//! require mongoose
const server = require("./server/mongoose");
//! require routes
const indexRoutes = require("./routes/index");

//* express server
const app = express();
const port = process.env.PORT;
app.listen(port, () => {
  console.log("servr start t port  " + port);
});

//* set use and static
app.engine("ejs", ejsMate);
app.set(`views`, path.join(__dirname, `views`));
app.set(`views engine`, `ejs`);
app.use(express.static(path.join(__dirname, `public`)));

//? routes
app.use("/", indexRoutes);
