
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:3000/api/article/home")
            .then((res) => {
                setArticles(res.data.articles);
            })
            .catch((err) => {
                console.log("ERROR:", err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // Format date and time
    const formatDate = (date) => {
        return new Date(date).toLocaleString('en-IN', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    if (loading) return <h2>Loading articles...</h2>;

    return (
        <section className="feed-section">

            <h1>Latest Articles</h1>

            {articles.length > 0 ? (
                <ul className="article-list">

                    {articles.map((article) => (
                        <li key={article._id} className="article-item">

                            <h2>{article.title}</h2>

                            <p>
                                Published on: {formatDate(article.publishedAt)}
                            </p>

                        </li>
                    ))}

                </ul>
            ) : (
                <h2>No articles available</h2>
            )}

        </section>
    );
};

export default Home;
