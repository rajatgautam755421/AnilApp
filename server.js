const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { dbConnection } = require("./config/dbConnection");
const {
  createSeedAdmin,
  createSeedAttendenceForEachClass,
} = require("./helpers/general");

const app = express();
dbConnection();
// createSeedAdmin();
// createSeedAttendenceForEachClass();

const Port = 5000;
//Global Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

const authRoute = require("./routes/auth");
const studentRoute = require("./routes/student");
const teacherRoute = require("./routes/teacher");
const noticeRoute = require("./routes/notice");
const attendenceRoute = require("./routes/attendence");

app.use("/api/v1", authRoute);
app.use("/api/v1", studentRoute);
app.use("/api/v1", teacherRoute);
app.use("/api/v1", noticeRoute);
app.use("/api/v1", attendenceRoute);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(Port, () => {
  console.log(`Server is up and running in ${Port}`);
});

// Login Route => http://localhost:5000/api/v1/login
