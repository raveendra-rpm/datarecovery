import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './src/models/User.js';
import connectDB from './src/config/db.js';

dotenv.config();

const importData = async () => {
  try {
    await connectDB();
    await User.deleteMany();

    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'password123', // Will be hashed by pre-save hook
      role: 'Admin',
    });

    await adminUser.save();
    console.log('Data Imported - Default Admin created!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    await User.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
