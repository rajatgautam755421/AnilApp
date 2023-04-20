const { createNotice, getAllNotices } = require("../controllers/notice");

const router = require("express").Router();

router.post("/notice", createNotice);
router.get("/notices", getAllNotices);

module.exports = router;
