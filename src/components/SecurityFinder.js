// components/SecurityFinder.js
import React, { useState } from 'react';
import './SecurityFinder.scss';

function SecurityFinder() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const response = await fetch(`https://api.example.com/security-finder?query=${query}`);
        const data = await response.json();
        setResults(data.securities);
    };

    return (
        <div className="security-finder">
            <h1>Security Finder</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for securities..."
            />
            <button onClick={handleSearch}>Search</button>
            <div className="results-list">
                {results.map((security, i) => (
                    <div key={i} className="result-item">
                        <h2>{security.name}</h2>
                        <p>Symbol: {security.symbol}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SecurityFinder;
