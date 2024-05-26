// components/CreditRatings.js
import React, { useEffect, useState } from 'react';
import './CreditRatings.scss';

function CreditRatings() {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        // Fetch credit ratings from an API or use static data
        const fetchRatings = async () => {
            const response = await fetch('https://api.example.com/credit-ratings');
            const data = await response.json();
            setRatings(data.ratings);
        };

        fetchRatings();
    }, []);

    return (
        <div className="credit-ratings">
            <h1>Credit Ratings</h1>
            <div className="ratings-list">
                {ratings.map((rating, i) => (
                    <div key={i} className="rating-item">
                        <h2>{rating.name}</h2>
                        <p>Rating: {rating.rating}</p>
                        <p>Date: {rating.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreditRatings;
