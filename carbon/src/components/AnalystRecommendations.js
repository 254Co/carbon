// components/AnalystRecommendations.js
import React, { useEffect, useState } from 'react';
import './AnalystRecommendations.scss';

function AnalystRecommendations() {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        // Fetch analyst recommendations from an API or use static data
        const fetchRecommendations = async () => {
            const response = await fetch('https://api.example.com/analyst-recommendations');
            const data = await response.json();
            setRecommendations(data.recommendations);
        };

        fetchRecommendations();
    }, []);

    return (
        <div className="analyst-recommendations">
            <h1>Analyst Recommendations</h1>
            <div className="recommendations-list">
                {recommendations.map((recommendation, i) => (
                    <div key={i} className="recommendation-item">
                        <h2>{recommendation.name}</h2>
                        <p>Recommendation: {recommendation.recommendation}</p>
                        <p>Price Target: {recommendation.priceTarget}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnalystRecommendations;
