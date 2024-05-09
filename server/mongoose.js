const mongoose = require("mongoose");

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

module.exports = mongooseServer;
