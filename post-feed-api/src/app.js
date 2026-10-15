//create a server using express
const express = require('express');

const app = express(); //Instance of express

//middleware to parse incoming requests with JSON payloads
app.use(express.json());

app.post('/create-post', async (req, res) => {
    
})

module.exports = app;