import express from "express";
import {ADD_STUDENT,UPDATE_STUDENT,DELETE_STUDENT} from "../controllers/student/manageStudent.js"
import {GET_STUDENTS,GET_STUDENT} from "../controllers/student/getStudent.js"

const router = express.Router();

router.post("/add-student", ADD_STUDENT);
router.get("/", GET_STUDENTS);
router.get("/:studentId", GET_STUDENT);
router.put("/:studentId", UPDATE_STUDENT);
router.delete("/:studentId", DELETE_STUDENT);

export default router;