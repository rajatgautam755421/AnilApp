const Notice = require("../models/Notice");

const createNotice = async (req, res) => {
  try {
    const response = await Notice.create(req.body);

    res.json({ success: true, message: response });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getAllNotices = async (rea, res) => {
  try {
    const response = await Notice.find({});

    res.json({ success: true, message: response });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = { createNotice, getAllNotices };
