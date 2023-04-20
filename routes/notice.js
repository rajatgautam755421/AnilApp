const {
  createNotice,
  getAllNotices,
  deleteNotice,
  updateNotice,
} = require("../controllers/notice");

const router = require("express").Router();

router.post("/notice", createNotice);
router.get("/notices", getAllNotices);
router.delete("/delete/notice/:id", deleteNotice);
router.put("/update/notice/:id", updateNotice);

module.exports = router;
