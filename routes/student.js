const { createStudent } = require("../controllers/student");

const router = require("express").Router();

router.post("/student", createStudent);

module.exports = router;
