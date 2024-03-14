import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';



// Load environment variables from .env file
dotenv.config();


// Create Express application
const app = express();


// Connect to MongoDB
connectDB();




// Middleware and route setup
// Example middleware setup:
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use('/api/users', require('./routes/users'));






// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});