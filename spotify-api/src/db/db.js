const mongoose = require('mongoose');
const dns = require('dns');
require('dotenv').config();
dns.setServers(['0.0.0.0','8.8.8.8']);


async function connectDB(){
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database");
}

module.exports = connectDB;
