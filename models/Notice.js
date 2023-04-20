const { Schema, model } = require("mongoose");

const noticeSchema = new Schema(
  {
    description: String,
  },
  { timestamps: true }
);

module.exports = model("NoticeModel", noticeSchema);
