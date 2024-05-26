// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './styles.scss';

function App() {
    const [section, setSection] = useState('dashboard');

    return (
        <div className="app">
            <Header />
            <Sidebar setSection={setSection} />
            <MainContent section={section} />
        </div>
    );
}

export default App;
