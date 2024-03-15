import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  section: { type: String, required: true },
  dob: { type: Date ,required:true },
  roll:{type:String,required:true},
  password:{type:String,required:true}
  // Other relevant fields
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
