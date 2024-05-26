// components/Economics.js
import React, { useEffect, useState } from 'react';
import './Economics.scss';

function Economics() {
    const [economicsData, setEconomicsData] = useState([]);

    useEffect(() => {
        // Fetch economic indicators from an API or use static data
        const fetchEconomicsData = async () => {
            const response = await fetch('https://api.example.com/economics');
            const data = await response.json();
            setEconomicsData(data.indicators);
        };

        fetchEconomicsData();
    }, []);

    return (
        <div className="economics">
            <h1>Economics</h1>
            <div className="economics-list">
                {economicsData.map((indicator, i) => (
                    <div key={i} className="indicator-item">
                        <h2>{indicator.name}</h2>
                        <p>Value: {indicator.value}</p>
                        <p>Date: {indicator.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Economics;
