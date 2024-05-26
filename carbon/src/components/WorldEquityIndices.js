// components/WorldEquityIndices.js
import React, { useEffect, useState } from 'react';
import './WorldEquityIndices.scss';

function WorldEquityIndices() {
    const [indices, setIndices] = useState([]);

    useEffect(() => {
        // Fetch world equity indices from an API or use static data
        const fetchIndices = async () => {
            const response = await fetch('https://api.example.com/equity-indices');
            const data = await response.json();
            setIndices(data.indices);
        };

        fetchIndices();
    }, []);

    return (
        <div className="world-equity-indices">
            <h1>World Equity Indices</h1>
            <div className="indices-list">
                {indices.map((index, i) => (
                    <div key={i} className="index-item">
                        <h2>{index.name}</h2>
                        <p>Value: {index.value}</p>
                        <p>Change: {index.change}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorldEquityIndices;
