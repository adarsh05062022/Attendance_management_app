import Attendance from "../../models/Attendance.js";

const GET_ATTENDENCE_OF_PARTICULAR_CLASS_BY_TEACHER = async (req, res) => {
  try {
    const { classId } = req.params;

    // Find attendance records for the specified class ID
    const attendanceRecords = await Attendance.find({ classId });

    // Respond with the attendance records
    res.json({ success: true, data: attendanceRecords });
  } catch (error) {
    console.error("Error getting attendance records by class:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// by student

const GET_ATTENDENCE_RECORDS_BY_STUDENT_OF_ALL_CLASSES = async (req, res) => {
        try {
                const { studentId } = req.params;
            
                // Find attendance records for the specified student ID
                const attendanceRecords = await Attendance.find({ 'attendanceRecords.studentId': studentId });
            
                // Respond with the attendance records
                res.json({ success: true,data: attendanceRecords });
              } catch (error) {
                console.error('Error getting attendance records by student across all classes:', error);
                res.status(500).json({ success: false, message: 'Internal server error.' });
              }
};
const GET_ATTENDENCE_RECORDS_BY_STUDENT_OF_PARTICULAR_DATE = async (
  req,
  res
) => {
        try {
                const { studentId, date } = req.params;

                // Parse the date string into a JavaScript Date object
    const [day, month, year] = date.split('-');
    const parsedDate = new Date(`${year}-${month}-${day}`);

            
                // Find attendance records for the specified student ID and date
                const attendanceRecords = await Attendance.find({
                  'attendanceRecords.studentId': studentId,
                  date: parsedDate
                });
            
                // Respond with the attendance records
                res.json({ success: true, data:attendanceRecords });
              } catch (error) {
                console.error('Error getting attendance records by student and date:', error);
                res.status(500).json({ success: false, message: 'Internal server error.' });
              }
};

export {
  GET_ATTENDENCE_OF_PARTICULAR_CLASS_BY_TEACHER,
  GET_ATTENDENCE_RECORDS_BY_STUDENT_OF_ALL_CLASSES,
  GET_ATTENDENCE_RECORDS_BY_STUDENT_OF_PARTICULAR_DATE,
};
