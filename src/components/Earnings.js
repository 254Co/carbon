// components/Earnings.js
import React, { useEffect, useState } from 'react';
import './Earnings.scss';

function Earnings() {
    const [earnings, setEarnings] = useState([]);

    useEffect(() => {
        // Fetch earnings data from an API or use static data
        const fetchEarnings = async () => {
            const response = await fetch('https://api.example.com/earnings');
            const data = await response.json();
            setEarnings(data.earnings);
        };

        fetchEarnings();
    }, []);

    return (
        <div className="earnings">
            <h1>Earnings</h1>
            <div className="earnings-list">
                {earnings.map((earning, i) => (
                    <div key={i} className="earning-item">
                        <h2>{earning.name}</h2>
                        <p>Earnings: {earning.earnings}</p>
                        <p>Date: {earning.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Earnings;
