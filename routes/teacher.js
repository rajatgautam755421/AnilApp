const { createTeacher } = require("../controllers/teacher");

const router = require("express").Router();

router.post("/teacher", createTeacher);

module.exports = router;
