// components/RelativeValue.js
import React, { useEffect, useState } from 'react';
import './RelativeValue.scss';

function RelativeValue() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch relative value data from an API or use static data
        const fetchData = async () => {
            const response = await fetch('https://api.example.com/relative-value');
            const data = await response.json();
            setData(data.data);
        };

        fetchData();
    }, []);

    return (
        <div className="relative-value">
            <h1>Relative Value</h1>
            <div className="data-list">
                {data.map((item, i) => (
                    <div key={i} className="data-item">
                        <h2>{item.name}</h2>
                        <p>Value: {item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RelativeValue;
