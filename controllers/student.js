const { STUDENT_ROLE } = require("../helpers/constants");
const Student = require("../models/Student");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const {
  getSpecificCharsFromName,
  getSpecificCharsFromUUID,
  createUserPassword,
} = require("../helpers/general");

const createStudent = async (req, res) => {
  try {
    const response = await Student.create(req.body);
    if (response) {
      const createdUser = await User.create({
        name: req.body.name,
        email: `${getSpecificCharsFromName(
          req.body.name
        )}${getSpecificCharsFromUUID(uuidv4())}@student.com`,
        password: createUserPassword(uuidv4()),
        role: STUDENT_ROLE,
      });
      res.json({ success: true, message: response, extra: createdUser });
    } else {
      res.json({ success: false, message: "User Is Not Created Successfully" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getAllStudents = async (rea, res) => {
  try {
    const response = await Student.find({});

    res.json({ success: true, message: response });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const response = await Student.findByIdAndRemove({ _id: req.params.id });
    res.json({ success: true, message: response });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const response = await Student.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    res.json({ success: true, message: response });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = {
  createStudent,
  deleteStudent,
  updateStudent,
  getAllStudents,
};
