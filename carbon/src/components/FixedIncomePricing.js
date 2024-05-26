// components/FixedIncomePricing.js
import React, { useEffect, useState } from 'react';
import './FixedIncomePricing.scss';

function FixedIncomePricing() {
    const [pricingData, setPricingData] = useState([]);

    useEffect(() => {
        // Fetch fixed income pricing data from an API or use static data
        const fetchPricingData = async () => {
            const response = await fetch('https://api.example.com/fixed-income-pricing');
            const data = await response.json();
            setPricingData(data.pricing);
        };

        fetchPricingData();
    }, []);

    return (
        <div className="fixed-income-pricing">
            <h1>Fixed Income Pricing</h1>
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

export default FixedIncomePricing;
