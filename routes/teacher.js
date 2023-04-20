const {
  createTeacher,
  deleteTeacher,
  updateTeacher,
  getAlleachers,
} = require("../controllers/teacher");

const router = require("express").Router();

router.post("/teacher", createTeacher);
router.get("/teachers", getAlleachers);
router.delete("/delete/teacher/:id", deleteTeacher);
router.put("/update/teacher/:id", updateTeacher);

module.exports = router;
