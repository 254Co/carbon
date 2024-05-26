import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="logo">Data Visualization Platform</div>
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Market Data</li>
                    <li>News</li>
                    <li>Analytics</li>
                    <li>Messaging</li>
                    <li>Portfolio</li>
                </ul>
            </nav>
            <div className="profile">User Profile</div>
        </header>
    );
}

export default Header;
