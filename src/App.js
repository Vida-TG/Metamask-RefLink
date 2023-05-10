import React from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';

function App() {

  const [address, setAddress] = React.useState('')

  function getAddress(passedAddress) {
    setAddress(passedAddress);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header getAddress={getAddress}/>
        <Card walletAddress={address}/>
      </header>
    </div>
  );
}

export default App;
