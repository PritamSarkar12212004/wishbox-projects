// * require files modules
const express = require("express");
const ejsMate = require("ejs-mate");
const path = require("path");
require("dotenv").config();
//! require mongoose
const mongooseServer = require("./server/mongoose"); // Corrected the import statement
//! require routes
const indexRoutes = require("./routes/index");

//* express server
const app = express();
const port = process.env.PORT;
mongooseServer(); // Start mongoose server

app.listen(port, () => {
  console.log("Server started at port " + port);
});

//* set use and static
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//? routes
app.use("/", indexRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("An error occurred:", err);
  res.status(500);
  res.render("/layouts/Error.ejs");
});

module.exports = app;
