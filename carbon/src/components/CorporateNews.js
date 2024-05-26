// components/CorporateNews.js
import React, { useEffect, useState } from 'react';
import './CorporateNews.scss';

function CorporateNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        // Fetch corporate news from an API or use static data
        const fetchNews = async () => {
            const response = await fetch('https://api.example.com/corporate-news');
            const data = await response.json();
            setNews(data.articles);
        };

        fetchNews();
    }, []);

    return (
        <div className="corporate-news">
            <h1>Corporate News</h1>
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

export default CorporateNews;
