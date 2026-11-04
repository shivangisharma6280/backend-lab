const articleModel = require('../models/article.model');
require('dotenv').config();


async function createArticle(req, res) {
    const { title, content } = req.body;

    const article = await articleModel.create({
        title : title,
        content : content,
        author : req.admin.id
       
    })

    res.status(201).json({
        message: "Article created successfully",
        article: {
            title: article.title,
            content: article.content,
            author: article.author,
            
        }
    })
}

async function getAllArticles(req, res) {
    const articles = await articleModel.find().select("title publishedAt");

    res.status(200).json({
        message: "Articles fetched successfully",
        articles: articles,
    })
}

module.exports = { createArticle, getAllArticles };