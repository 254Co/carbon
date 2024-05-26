// components/CorporateDebtResearch.js
import React, { useEffect, useState } from 'react';
import './CorporateDebtResearch.scss';

function CorporateDebtResearch() {
    const [research, setResearch] = useState([]);

    useEffect(() => {
        // Fetch corporate debt research data from an API or use static data
        const fetchResearch = async () => {
            const response = await fetch('https://api.example.com/corporate-debt-research');
            const data = await response.json();
            setResearch(data.research);
        };

        fetchResearch();
    }, []);

    return (
        <div className="corporate-debt-research">
            <h1>Corporate Debt Research</h1>
            <div className="research-list">
                {research.map((item, i) => (
                    <div key={i} className="research-item">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CorporateDebtResearch;
