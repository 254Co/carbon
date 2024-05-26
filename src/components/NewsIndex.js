// components/NewsIndex.js
import React, { useEffect, useState } from 'react';
import './NewsIndex.scss';

function NewsIndex() {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // Fetch news from an API or use static data
        const fetchNews = async () => {
            const response = await fetch(`https://api.example.com/news?query=${search}`);
            const data = await response.json();
            setNews(data.articles);
        };

        fetchNews();
    }, [search]);

    return (
        <div className="news-index">
            <h1>News Index</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search news..."
            />
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

export default NewsIndex;
