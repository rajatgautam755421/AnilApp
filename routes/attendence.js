const {
  updateAttendenceofSpecificClass,
} = require("../controllers/attendence");

const router = require("express").Router();

router.get("/attendence", updateAttendenceofSpecificClass);

module.exports = router;
