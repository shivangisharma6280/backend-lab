const express = require('express');
const articleController = require('../controller/article.controller');
const { authUser, authAdmin } = require('../middleware/auth.middleware');


const router = express.Router();

router.post('/create', authAdmin, articleController.createArticle);
router.get('/home',articleController.getAllArticles);
router.get('/admin', authAdmin, articleController.getAllArticles);
router.patch('/edit/:articleId', authAdmin, articleController.editArticle);
router.get('/:articleId',articleController.getArticle);


module.exports = router;