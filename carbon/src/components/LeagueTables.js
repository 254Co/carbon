// components/LeagueTables.js
import React, { useEffect, useState } from 'react';
import './LeagueTables.scss';

function LeagueTables() {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        // Fetch league tables from an API or use static data
        const fetchTables = async () => {
            const response = await fetch('https://api.example.com/league-tables');
            const data = await response.json();
            setTables(data.tables);
        };

        fetchTables();
    }, []);

    return (
        <div className="league-tables">
            <h1>League Tables</h1>
            <div className="tables-list">
                {tables.map((table, i) => (
                    <div key={i} className="table-item">
                        <h2>{table.name}</h2>
                        <p>Ranking: {table.ranking}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeagueTables;
