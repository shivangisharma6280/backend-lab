import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {

    const { articleId } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {

        axios.get(`http://localhost:3000/api/article/${articleId}`)
            .then((res) => {
                setArticle(res.data.article);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [articleId]);

    if (!article) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.publishedAt}</p>
            <p>{article.content}</p>
        </div>
    );
};

export default ArticleDetails;