// components/ForeignExchangeForecast.js
import React, { useEffect, useState } from 'react';
import './ForeignExchangeForecast.scss';

function ForeignExchangeForecast() {
    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        // Fetch FX forecasts from an API or use static data
        const fetchForecasts = async () => {
            const response = await fetch('https://api.example.com/foreign-exchange-forecast');
            const data = await response.json();
            setForecasts(data.forecasts);
        };

        fetchForecasts();
    }, []);

    return (
        <div className="foreign-exchange-forecast">
            <h1>Foreign Exchange Forecast</h1>
            <div className="forecasts-list">
                {forecasts.map((forecast, i) => (
                    <div key={i} className="forecast-item">
                        <h2>{forecast.currencyPair}</h2>
                        <p>Forecast: {forecast.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ForeignExchangeForecast;
