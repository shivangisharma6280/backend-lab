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

async function getArticle(req, res){
    const articleId = req.params.articleId;
    const article = await articleModel.findById(articleId).select("title content publishedAt");

    res.status(200).json({
        message: "Article fetched successfully",
        article: article,
    })
}

async function editArticle(req, res){
    const articleId = req.params.articleId;
    const { title, content } = req.body;
    const article = await articleModel.findByIdAndUpdate(articleId, {
        title: title,
        content: content
    },{new: true});
    return res.status(200).json({
        message: "Article updated successfully",
        article: article,
    })
}

module.exports = { createArticle, getAllArticles, getArticle, editArticle };