// components/MainContent.js
import React from 'react';
import Dashboard from './Dashboard';
import MarketData from './MarketData';
import News from './News';
import Analytics from './Analytics';
import Messaging from './Messaging';
import Portfolio from './Portfolio';
import UserManagement from './UserManagement';
import Settings from './Settings';
import Reports from './Reports';
import Notifications from './Notifications';
import VictoryChartComponent from './VictoryChart';
import Heatmap from './Heatmap';
import ScatterPlot from './ScatterPlot';
import PieChart from './PieChart';
import DataTable from './DataTable';
import Calendar from './Calendar';
import UserFeedback from './UserFeedback';
import TopNews from './TopNews';
import WorldEquityIndices from './WorldEquityIndices';
import ForeignExchangeTradeflow from './ForeignExchangeTradeflow';
import NewsIndex from './NewsIndex';
import Economics from './Economics';
import CompanyManagement from './CompanyManagement';
import HistoricalDataService from './HistoricalDataService';
import MostActiveSecurities from './MostActiveSecurities';
import SecurityFinder from './SecurityFinder';
import TreasuryMoneyMarkets from './TreasuryMoneyMarkets';
import FixedIncomePricing from './FixedIncomePricing';
import CreditRatings from './CreditRatings';
import LeagueTables from './LeagueTables';
import GovernmentPolitics from './GovernmentPolitics';
import CorporateDebtResearch from './CorporateDebtResearch';
import BloombergCommodity from './BloombergCommodity';
import ForeignExchangeForecast from './ForeignExchangeForecast';
import EquityScreening from './EquityScreening';
import RelativeValue from './RelativeValue';
import Description from './Description';
import CompanyInformation from './CompanyInformation';
import CorporateNews from './CorporateNews';
import AnalystRecommendations from './AnalystRecommendations';
import Earnings from './Earnings';
import FixedIncome from './FixedIncome';
import CorporateBondData from './CorporateBondData';
import InstantMessage from './InstantMessage';
import HistoricalPricing from './HistoricalPricing';
import Graph from './Graph';
import './MainContent.scss';

function MainContent({ section }) {
    return (
        <main className="main-content">
            {section === 'dashboard' && <Dashboard />}
            {section === 'market-data' && <MarketData />}
            {section === 'news' && <News />}
            {section === 'analytics' && <Analytics />}
            {section === 'messaging' && <Messaging />}
            {section === 'portfolio' && <Portfolio />}
            {section === 'user-management' && <UserManagement />}
            {section === 'settings' && <Settings />}
            {section === 'reports' && <Reports />}
            {section === 'notifications' && <Notifications />}
            {section === 'victory-chart' && <VictoryChartComponent />}
            {section === 'heatmap' && <Heatmap />}
            {section === 'scatter-plot' && <ScatterPlot />}
            {section === 'pie-chart' && <PieChart />}
            {section === 'data-table' && <DataTable />}
            {section === 'calendar' && <Calendar />}
            {section === 'user-feedback' && <UserFeedback />}
            {section === 'top-news' && <TopNews />}
            {section === 'world-equity-indices' && <WorldEquityIndices />}
            {section === 'foreign-exchange-tradeflow' && <ForeignExchangeTradeflow />}
            {section === 'news-index' && <NewsIndex />}
            {section === 'economics' && <Economics />}
            {section === 'company-management' && <CompanyManagement />}
            {section === 'historical-data-service' && <HistoricalDataService />}
            {section === 'most-active-securities' && <MostActiveSecurities />}
            {section === 'security-finder' && <SecurityFinder />}
            {section === 'treasury-money-markets' && <TreasuryMoneyMarkets />}
            {section === 'fixed-income-pricing' && <FixedIncomePricing />}
            {section === 'credit-ratings' && <CreditRatings />}
            {section === 'league-tables' && <LeagueTables />}
            {section === 'government-politics' && <GovernmentPolitics />}
            {section === 'corporate-debt-research' && <CorporateDebtResearch />}
            {section === 'bloomberg-commodity' && <BloombergCommodity />}
            {section === 'foreign-exchange-forecast' && <ForeignExchangeForecast />}
            {section === 'equity-screening' && <EquityScreening />}
            {section === 'relative-value' && <RelativeValue />}
            {section === 'description' && <Description />}
            {section === 'company-information' && <CompanyInformation />}
            {section === 'corporate-news' && <CorporateNews />}
            {section === 'analyst-recommendations' && <AnalystRecommendations />}
            {section === 'earnings' && <Earnings />}
            {section === 'fixed-income' && <FixedIncome />}
            {section === 'corporate-bond-data' && <CorporateBondData />}
            {section === 'instant-message' && <InstantMessage />}
            {section === 'historical-pricing' && <HistoricalPricing />}
            {section === 'graph' && <Graph />}
        </main>
    );
}

export default MainContent;
