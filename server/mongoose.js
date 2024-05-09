const mongoose = require("mongoose");
function mongooseServer() {
  async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  main()
    .then(() => {
      console.log("DataBase is running");
    })
    .catch(() => {
      console.log("DataBase crash by error");
    });
}

mongooseServer();

module.exports = mongooseServer;

