const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rajatgautam6635:rajatgautam6635@cluster0.2rco1vt.mongodb.net/test"
    );
    console.log("Connected To Database");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = { dbConnection };
