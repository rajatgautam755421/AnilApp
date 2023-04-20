const { Schema, model } = require("mongoose");

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    rollNo: Number,
    class: String,
    address: String,
    phone: Number,
  },
  { timestamps: true }
);

module.exports = model("StudentModel", studentSchema);
