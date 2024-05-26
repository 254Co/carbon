// components/MostActiveSecurities.js
import React, { useEffect, useState } from 'react';
import './MostActiveSecurities.scss';

function MostActiveSecurities() {
    const [securities, setSecurities] = useState([]);

    useEffect(() => {
        // Fetch most active securities from an API or use static data
        const fetchSecurities = async () => {
            const response = await fetch('https://api.example.com/most-active-securities');
            const data = await response.json();
            setSecurities(data.securities);
        };

        fetchSecurities();
    }, []);

    return (
        <div className="most-active-securities">
            <h1>Most Active Securities</h1>
            <div className="securities-list">
                {securities.map((security, i) => (
                    <div key={i} className="security-item">
                        <h2>{security.name}</h2>
                        <p>Volume: {security.volume}</p>
                        <p>Value: {security.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MostActiveSecurities;
