// components/HistoricalPricing.js
import React, { useEffect, useState } from 'react';
import './HistoricalPricing.scss';

function HistoricalPricing() {
    const [pricingData, setPricingData] = useState([]);

    useEffect(() => {
        // Fetch historical pricing data from an API or use static data
        const fetchPricingData = async () => {
            const response = await fetch('https://api.example.com/historical-pricing');
            const data = await response.json();
            setPricingData(data.pricing);
        };

        fetchPricingData();
    }, []);

    return (
        <div className="historical-pricing">
            <h1>Historical Pricing</h1>
            <div className="pricing-list">
                {pricingData.map((data, i) => (
                    <div key={i} className="pricing-item">
                        <h2>{data.name}</h2>
                        <p>Price: {data.price}</p>
                        <p>Date: {data.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HistoricalPricing;
