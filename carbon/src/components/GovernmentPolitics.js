// components/GovernmentPolitics.js
import React, { useEffect, useState } from 'react';
import './GovernmentPolitics.scss';

function GovernmentPolitics() {
    const [politics, setPolitics] = useState([]);

    useEffect(() => {
        // Fetch government and politics data from an API or use static data
        const fetchPolitics = async () => {
            const response = await fetch('https://api.example.com/government-politics');
            const data = await response.json();
            setPolitics(data.politics);
        };

        fetchPolitics();
    }, []);

    return (
        <div className="government-politics">
            <h1>Government and Politics</h1>
            <div className="politics-list">
                {politics.map((item, i) => (
                    <div key={i} className="politics-item">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GovernmentPolitics;
