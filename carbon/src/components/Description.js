// components/Description.js
import React, { useState } from 'react';
import './Description.scss';

function Description() {
    const [symbol, setSymbol] = useState('');
    const [description, setDescription] = useState(null);

    const handleSearch = async () => {
        const response = await fetch(`https://api.example.com/description?symbol=${symbol}`);
        const data = await response.json();
        setDescription(data.description);
    };

    return (
        <div className="description">
            <h1>Description</h1>
            <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                placeholder="Enter security symbol..."
            />
            <button onClick={handleSearch}>Search</button>
            {description && (
                <div className="description-result">
                    <h2>{description.name}</h2>
                    <p>{description.details}</p>
                </div>
            )}
        </div>
    );
}

export default Description;
