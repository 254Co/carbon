// components/HistoricalDataService.js
import React, { useEffect, useState } from 'react';
import './HistoricalDataService.scss';

function HistoricalDataService() {
    const [historicalData, setHistoricalData] = useState([]);

    useEffect(() => {
        // Fetch historical data from an API or use static data
        const fetchHistoricalData = async () => {
            const response = await fetch('https://api.example.com/historical-data');
            const data = await response.json();
            setHistoricalData(data.data);
        };

        fetchHistoricalData();
    }, []);

    return (
        <div className="historical-data-service">
            <h1>Historical Data Service</h1>
            <div className="historical-data-list">
                {historicalData.map((data, i) => (
                    <div key={i} className="historical-data-item">
                        <h2>{data.name}</h2>
                        <p>Date: {data.date}</p>
                        <p>Value: {data.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HistoricalDataService;
