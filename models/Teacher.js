const { Schema, model } = require("mongoose");

const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    address: String,
    phone: Number,
  },
  { timestamps: true }
);

module.exports = model("TeacherModel", teacherSchema);
