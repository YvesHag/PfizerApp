import React from 'react';
import './App.css';
import QrScanner from './components/QRscanner'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QrScanner></QrScanner>
        <p>testing</p>
      </header>
    </div>
  );
}

export default App;
