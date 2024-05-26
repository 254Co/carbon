// components/ForeignExchangeTradeflow.js
import React, { useEffect, useState } from 'react';
import './ForeignExchangeTradeflow.scss';

function ForeignExchangeTradeflow() {
    const [tradeflow, setTradeflow] = useState([]);

    useEffect(() => {
        // Fetch FX tradeflow data from an API or use static data
        const fetchTradeflow = async () => {
            const response = await fetch('https://api.example.com/fx-tradeflow');
            const data = await response.json();
            setTradeflow(data.tradeflow);
        };

        fetchTradeflow();
    }, []);

    return (
        <div className="foreign-exchange-tradeflow">
            <h1>Foreign Exchange Tradeflow</h1>
            <div className="tradeflow-list">
                {tradeflow.map((flow, i) => (
                    <div key={i} className="tradeflow-item">
                        <h2>{flow.currencyPair}</h2>
                        <p>Trade Volume: {flow.volume}</p>
                        <p>Trade Value: {flow.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ForeignExchangeTradeflow;
