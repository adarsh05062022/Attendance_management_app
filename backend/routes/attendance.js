import express from 'express';
import { GET_ATTENDENCE_OF_PARTICULAR_CLASS_BY_TEACHER, GET_ATTENDENCE_RECORDS_BY_STUDENT_OF_ALL_CLASSES, GET_ATTENDENCE_RECORDS_BY_STUDENT_OF_PARTICULAR_DATE} from '../controllers/attendance/getAttendance.js';

import { CREATE_ATTENDENCE_RECORD, UPDATE_ATTENDENCE_RECORD, DELETE_ATTENDENCE_RECORD} from '../controllers/attendance/manageAttendance.js';

const router = express.Router();

// Create Attendance Record
router.post('/create-attendance', CREATE_ATTENDENCE_RECORD);

// Update Attendance Record
router.put('/:attendanceId', UPDATE_ATTENDENCE_RECORD);

// Get Attendance Records by Class 
router.get('/class/:classId/', GET_ATTENDENCE_OF_PARTICULAR_CLASS_BY_TEACHER);

// Get Attendance Records by Student on a particular date
router.get('/student/:studentId/date/:date', GET_ATTENDENCE_RECORDS_BY_STUDENT_OF_PARTICULAR_DATE);

// Get Attendance Records by Student of all classes
router.get('/student/:studentId', GET_ATTENDENCE_RECORDS_BY_STUDENT_OF_ALL_CLASSES);

// Delete Attendance Record
router.delete('/:attendanceId', DELETE_ATTENDENCE_RECORD);

export default router;
