// components/EquityScreening.js
import React, { useState } from 'react';
import './EquityScreening.scss';

function EquityScreening() {
    const [criteria, setCriteria] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const response = await fetch(`https://api.example.com/equity-screening?criteria=${criteria}`);
        const data = await response.json();
        setResults(data.equities);
    };

    return (
        <div className="equity-screening">
            <h1>Equity Screening</h1>
            <input
                type="text"
                value={criteria}
                onChange={(e) => setCriteria(e.target.value)}
                placeholder="Enter screening criteria..."
            />
            <button onClick={handleSearch}>Search</button>
            <div className="results-list">
                {results.map((equity, i) => (
                    <div key={i} className="result-item">
                        <h2>{equity.name}</h2>
                        <p>Symbol: {equity.symbol}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EquityScreening;
