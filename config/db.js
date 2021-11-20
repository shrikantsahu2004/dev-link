const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    //mongodb connection may take some time hence async await
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
