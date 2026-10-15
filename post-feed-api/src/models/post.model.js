const mongoose = require('mongoose');

// Define the Post schema
const postSchema = new mongoose.Schema({
    image: String,
    caption: String,
}) 

// Create the Post model
const post = mongoose.model("post", postSchema);

module.exports = post;