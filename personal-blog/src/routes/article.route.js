const express = require('express');
const articleController = require('../controller/article.controller');
const { authUser, authAdmin } = require('../middleware/auth.middleware');


const router = express.Router();

router.post('/create', authAdmin, articleController.createArticle);
router.get('/home', authUser, articleController.getAllArticles);


module.exports = router;