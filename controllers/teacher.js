const { STUDENT_ROLE, TEACHER_ROLE } = require("../helpers/constants");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const {
  getSpecificCharsFromName,
  getSpecificCharsFromUUID,
  createUserPassword,
} = require("../helpers/general");
const Teacher = require("../models/Teacher");

const createTeacher = async (req, res) => {
  try {
    const response = await Teacher.create(req.body);
    if (response) {
      const createdUser = await User.create({
        name: req.body.name,
        email: `${getSpecificCharsFromName(
          req.body.name
        )}${getSpecificCharsFromUUID(uuidv4())}@teacher.com`,
        password: createUserPassword(uuidv4()),
        role: TEACHER_ROLE,
      });
      res.json({ success: true, message: response, extra: createdUser });
    } else {
      res.json({ success: false, message: "User Is Not Created Successfully" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = { createTeacher };
