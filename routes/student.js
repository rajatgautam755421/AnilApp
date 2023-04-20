const {
  createStudent,
  deleteStudent,
  updateStudent,
  getAllStudents,
} = require("../controllers/student");

const router = require("express").Router();

router.post("/student", createStudent);
router.get("/teachers", getAllStudents);
router.delete("/delete/student/:id", deleteStudent);
router.put("/update/student/:id", updateStudent);

module.exports = router;
