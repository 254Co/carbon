// components/BloombergCommodity.js
import React, { useEffect, useState } from 'react';
import './BloombergCommodity.scss';

function BloombergCommodity() {
    const [commodities, setCommodities] = useState([]);

    useEffect(() => {
        // Fetch commodity data from an API or use static data
        const fetchCommodities = async () => {
            const response = await fetch('https://api.example.com/commodities');
            const data = await response.json();
            setCommodities(data.commodities);
        };

        fetchCommodities();
    }, []);

    return (
        <div className="bloomberg-commodity">
            <h1>Bloomberg Commodity</h1>
            <div className="commodities-list">
                {commodities.map((commodity, i) => (
                    <div key={i} className="commodity-item">
                        <h2>{commodity.name}</h2>
                        <p>Price: {commodity.price}</p>
                        <p>Change: {commodity.change}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BloombergCommodity;
