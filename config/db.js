const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // put in a 1 so we exit with the failure
    process.exit(1);
  }
};

module.exports = connectDB;
