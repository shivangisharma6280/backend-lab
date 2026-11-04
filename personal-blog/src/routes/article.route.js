const express = require('express');
const articleController = require('../controller/article.controller');


const router = express.Router();

router.post('/create', articleController.createArticle)