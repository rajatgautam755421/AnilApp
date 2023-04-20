const { Schema, model } = require("mongoose");

const attendenceSchema = new Schema(
  {
    className: String,
    attendence: [
      {
        date: Date,
        absentOrPresent: [
          {
            studentName: String,
            isPresent: { type: Boolean, default: false },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("AttendenceModel", attendenceSchema);
