const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nitinthakur46323:nitinthakur46323@cluster0.sxdz8.mongodb.net/"
    );
    console.log("connection successfull");
  } catch (error) {
    console.error("connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
