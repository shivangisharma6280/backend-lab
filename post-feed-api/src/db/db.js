const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file
const dns = require('dns');

dns.setServers(['0.0.0.0', '8.8.8.8']);

// Connect to MongoDB using the connection string from the .env file
async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
}  

module.exports = connectDB;
