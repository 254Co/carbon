// components/TreasuryMoneyMarkets.js
import React, { useEffect, useState } from 'react';
import './TreasuryMoneyMarkets.scss';

function TreasuryMoneyMarkets() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch treasury and money market data from an API or use static data
        const fetchData = async () => {
            const response = await fetch('https://api.example.com/treasury-money-markets');
            const data = await response.json();
            setData(data.data);
        };

        fetchData();
    }, []);

    return (
        <div className="treasury-money-markets">
            <h1>Treasury and Money Markets</h1>
            <div className="data-list">
                {data.map((item, i) => (
                    <div key={i} className="data-item">
                        <h2>{item.name}</h2>
                        <p>Value: {item.value}</p>
                        <p>Date: {item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TreasuryMoneyMarkets;
