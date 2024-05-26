// components/CompanyManagement.js
import React, { useEffect, useState } from 'react';
import './CompanyManagement.scss';

function CompanyManagement() {
    const [management, setManagement] = useState([]);

    useEffect(() => {
        // Fetch company management data from an API or use static data
        const fetchManagement = async () => {
            const response = await fetch('https://api.example.com/company-management');
            const data = await response.json();
            setManagement(data.executives);
        };

        fetchManagement();
    }, []);

    return (
        <div className="company-management">
            <h1>Company Management</h1>
            <div className="management-list">
                {management.map((exec, i) => (
                    <div key={i} className="management-item">
                        <h2>{exec.name}</h2>
                        <p>Position: {exec.position}</p>
                        <p>Company: {exec.company}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompanyManagement;
