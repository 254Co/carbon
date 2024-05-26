// components/Sidebar.js
import React from 'react';
import './Sidebar.scss';

function Sidebar({ setSection }) {
    return (
        <aside className="sidebar">
            <ul>
                <li onClick={() => setSection('dashboard')}>Dashboard</li>
                <li onClick={() => setSection('market-data')}>Market Data</li>
                <li onClick={() => setSection('news')}>News</li>
                <li onClick={() => setSection('analytics')}>Analytics</li>
                <li onClick={() => setSection('messaging')}>Messaging</li>
                <li onClick={() => setSection('portfolio')}>Portfolio</li>
                <li onClick={() => setSection('user-management')}>User Management</li>
                <li onClick={() => setSection('settings')}>Settings</li>
                <li onClick={() => setSection('reports')}>Reports</li>
                <li onClick={() => setSection('notifications')}>Notifications</li>
                <li onClick={() => setSection('victory-chart')}>Victory Chart</li>
                <li onClick={() => setSection('heatmap')}>Heatmap</li>
                <li onClick={() => setSection('scatter-plot')}>Scatter Plot</li>
                <li onClick={() => setSection('pie-chart')}>Pie Chart</li>
                <li onClick={() => setSection('data-table')}>Data Table</li>
                <li onClick={() => setSection('calendar')}>Calendar</li>
                <li onClick={() => setSection('user-feedback')}>User Feedback</li>
                <li onClick={() => setSection('top-news')}>Top News</li>
                <li onClick={() => setSection('world-equity-indices')}>World Equity Indices</li>
                <li onClick={() => setSection('foreign-exchange-tradeflow')}>Foreign Exchange Tradeflow</li>
                <li onClick={() => setSection('news-index')}>News Index</li>
                <li onClick={() => setSection('economics')}>Economics</li>
                <li onClick={() => setSection('company-management')}>Company Management</li>
                <li onClick={() => setSection('historical-data-service')}>Historical Data Service</li>
                <li onClick={() => setSection('most-active-securities')}>Most Active Securities</li>
                <li onClick={() => setSection('security-finder')}>Security Finder</li>
                <li onClick={() => setSection('treasury-money-markets')}>Treasury and Money Markets</li>
                <li onClick={() => setSection('fixed-income-pricing')}>Fixed Income Pricing</li>
                <li onClick={() => setSection('credit-ratings')}>Credit Ratings</li>
                <li onClick={() => setSection('league-tables')}>League Tables</li>
                <li onClick={() => setSection('government-politics')}>Government and Politics</li>
                <li onClick={() => setSection('corporate-debt-research')}>Corporate Debt Research</li>
                <li onClick={() => setSection('bloomberg-commodity')}>Bloomberg Commodity</li>
                <li onClick={() => setSection('foreign-exchange-forecast')}>Foreign Exchange Forecast</li>
                <li onClick={() => setSection('equity-screening')}>Equity Screening</li>
                <li onClick={() => setSection('relative-value')}>Relative Value</li>
                <li onClick={() => setSection('description')}>Description</li>
                <li onClick={() => setSection('company-information')}>Company Information</li>
                <li onClick={() => setSection('corporate-news')}>Corporate News</li>
                <li onClick={() => setSection('analyst-recommendations')}>Analyst Recommendations</li>
                <li onClick={() => setSection('earnings')}>Earnings</li>
                <li onClick={() => setSection('fixed-income')}>Fixed Income</li>
                <li onClick={() => setSection('corporate-bond-data')}>Corporate Bond Data</li>
                <li onClick={() => setSection('instant-message')}>Instant Message</li>
                <li onClick={() => setSection('historical-pricing')}>Historical Pricing</li>
                <li onClick={() => setSection('graph')}>Graph</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
