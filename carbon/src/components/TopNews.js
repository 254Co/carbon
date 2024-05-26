// components/TopNews.js
import React, { useEffect, useState } from 'react';
import './TopNews.scss';

function TopNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        // Fetch top news from an API or use static data
        const fetchNews = async () => {
            const response = await fetch('https://api.example.com/top-news');
            const data = await response.json();
            setNews(data.articles);
        };

        fetchNews();
    }, []);

    return (
        <div className="top-news">
            <h1>Top News</h1>
            <div className="news-list">
                {news.map((article, index) => (
                    <div key={index} className="news-item">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopNews;
