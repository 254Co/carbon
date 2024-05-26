// components/FixedIncome.js
import React, { useEffect, useState } from 'react';
import './FixedIncome.scss';

function FixedIncome() {
    const [fixedIncomeData, setFixedIncomeData] = useState([]);

    useEffect(() => {
        // Fetch fixed income data from an API or use static data
        const fetchFixedIncomeData = async () => {
            const response = await fetch('https://api.example.com/fixed-income');
            const data = await response.json();
            setFixedIncomeData(data.fixedIncome);
        };

        fetchFixedIncomeData();
    }, []);

    return (
        <div className="fixed-income">
            <h1>Fixed Income</h1>
            <div className="fixed-income-list">
                {fixedIncomeData.map((data, i) => (
                    <div key={i} className="fixed-income-item">
                        <h2>{data.name}</h2>
                        <p>Price: {data.price}</p>
                        <p>Yield: {data.yield}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FixedIncome;
