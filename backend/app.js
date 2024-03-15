import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import teacherRoutes from "./routes/teacher.js";
import studentRoutes from "./routes/student.js";
import classRoutes from "./routes/class.js";
import attendanceRoute from "./routes/attendance.js";
import authRoutes from "./routes/auth.js";

// Load environment variables from .env file
dotenv.config();

// Create Express application
const app = express();

// Connect to MongoDB
connectDB();

// Middleware and route setup
// Example middleware setup:
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use('/api/users', require('./routes/users'));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/teacher", teacherRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/class", classRoutes);
app.use("/api/attendance", attendanceRoute);
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
