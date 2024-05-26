// components/CorporateBondData.js
import React, { useEffect, useState } from 'react';
import './CorporateBondData.scss';

function CorporateBondData() {
    const [bondData, setBondData] = useState([]);

    useEffect(() => {
        // Fetch corporate bond data from an API or use static data
        const fetchBondData = async () => {
            const response = await fetch('https://api.example.com/corporate-bonds');
            const data = await response.json();
            setBondData(data.bonds);
        };

        fetchBondData();
    }, []);

    return (
        <div className="corporate-bond-data">
            <h1>Corporate Bond Data</h1>
            <div className="bond-data-list">
                {bondData.map((bond, i) => (
                    <div key={i} className="bond-data-item">
                        <h2>{bond.name}</h2>
                        <p>Price: {bond.price}</p>
                        <p>Yield: {bond.yield}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CorporateBondData;
