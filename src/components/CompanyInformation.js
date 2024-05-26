// components/CompanyInformation.js
import React, { useState } from 'react';
import './CompanyInformation.scss';

function CompanyInformation() {
    const [company, setCompany] = useState('');
    const [info, setInfo] = useState(null);

    const handleSearch = async () => {
        const response = await fetch(`https://api.example.com/company-information?company=${company}`);
        const data = await response.json();
        setInfo(data.info);
    };

    return (
        <div className="company-information">
            <h1>Company Information</h1>
            <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter company name..."
            />
            <button onClick={handleSearch}>Search</button>
            {info && (
                <div className="company-info">
                    <h2>{info.name}</h2>
                    <p>Industry: {info.industry}</p>
                    <p>CEO: {info.ceo}</p>
                    {/* Add more company information as needed */}
                </div>
            )}
        </div>
    );
}

export default CompanyInformation;
