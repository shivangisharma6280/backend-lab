const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers(['0.0.0.0','8.8.8.8']);

require('dotenv').config();

async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

}

module.exports = connectDB;