const Attendence = require("../models/Attendence");

const updateAttendenceofSpecificClass = async (req, res) => {
  const { className, date, attendenceData } = req.body;
  try {
    const response = await Attendence.findOne({ className });

    if (response) {
      const dateSpecificAttendence = response?.attendence?.findIndex(
        (info) => new Date(info?.date).getTime() === new Date(date).getTime()
      );

      if (dateSpecificAttendence !== -1) {
        response.attendence[dateSpecificAttendence] = {
          date,
          absentOrPresent: [...attendenceData],
        };
      } else {
        response?.attendence.push({
          date,
          absentOrPresent: [...attendenceData],
        });
      }

      const updatedValue = await Attendence.findOneAndUpdate(
        { className },
        { ...response },
        { new: true }
      );

      res.json({ success: false, message: updatedValue });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = { updateAttendenceofSpecificClass };
