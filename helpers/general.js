const Attendence = require("../models/Attendence");
const User = require("../models/User");
const { ADMIN_ROLE, allClasses } = require("./constants");

const createSeedAdmin = async () => {
  try {
    const response = await User.findOne({ role: ADMIN_ROLE });
    if (!response) {
      User.create({
        name: "Admin",
        email: "admin@gmail.com",
        role: "Admin",
        password: "abc123",
        phone: 4852357472,
      });
      console.log("Admin Successfully Seeded");
    }
  } catch (error) {
    console.log(error);
  }
};

const getSpecificCharsFromName = (name) => {
  return (
    name?.split(" ")[0]?.toLowerCase() + name?.split(" ")[1]?.toLowerCase()
  );
};

const getSpecificCharsFromUUID = (str) => {
  return str?.split("-")[0]?.toLowerCase();
};

const createUserPassword = (str) => {
  return str.split("-")[1] + str.split("-")[2];
};

const createSeedAttendenceForEachClass = async () => {
  try {
    const response = await Attendence.find({});
    if (!response.length) {
      allClasses.forEach((classInfo) => {
        Attendence.create({ className: classInfo, attendence: [] });
        console.log(`Attendence for class ${classInfo} created.`);
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createSeedAdmin,
  getSpecificCharsFromName,
  getSpecificCharsFromUUID,
  createUserPassword,
  createSeedAttendenceForEachClass,
};
