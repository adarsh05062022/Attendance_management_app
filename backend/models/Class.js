import mongoose from 'mongoose';


const classSchema = new mongoose.Schema({
  className: { type: String, required: true },
  section: { type: String, required: true },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  studentIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  date: { type: Date, default: Date.now }
  // Other relevant fields
});

const Class = mongoose.model('Class', classSchema);
export default Class;