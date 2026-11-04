const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes')
const articleRoutes = require('./routes/article.route')
const app = express();
app.use(express.json());
app.use(cookieParser());
const cors = require('cors');


//middleware to parse incoming requests with JSON payloads
app.use(express.json());

app.use(cors())


app.use('/api/auth', authRoutes);
app.use('/api/article', articleRoutes);

module.exports = app;