// * require files modules
const express = require("express");
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
require("dotenv").config();
//! require middleware

//! require routes
const indexRoutes = require("./routes/index.js");
const adminRoutes = require("./routes/admi.js");
const CURD = require("./routes/CURD.js");

//* express server
const app = express();
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server started at port " + port);
});
//* mongo srver
async function mongooseServer() {
  const maxRetries = 5; // Maximum number of connection retry attempts
  const retryDelay = 3000; // Delay between retry attempts in milliseconds (3 seconds in this example)
  let retries = 0;

  while (retries < maxRetries) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Database is running");
      return; // If the connection is successful, exit the function
    } catch (error) {
      console.error(
        `Database connection error (Attempt ${retries + 1}):`,
        error
      );
      retries++;
      // If maximum retries reached, log the failure and exit the function
      if (retries === maxRetries) {
        console.error(
          "Maximum retry attempts reached. Unable to connect to the database."
        );
        process.exit(1);
      }
      console.log(`Retrying connection in ${retryDelay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, retryDelay)); // Wait before retrying
    }
  }
}

mongooseServer();
//* set use and static
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//? use middleware
app.use(methodOverride(`_method`));

//? routes
app.use("/", indexRoutes);
app.use("/admin", adminRoutes);
app.use("/CURD", CURD);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("An error occurred:", err);
  res.status(500);
  // res.render("./layouts/Error.ejs");
});

module.exports = app;
