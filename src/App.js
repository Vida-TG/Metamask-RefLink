import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import './header.css'
import Card from './Components/Card';

function App() {

  const [walletAddress, setWalletAddress] = React.useState("")
  const [ refLink, setRefLink ] = React.useState("");

  async function share(){
      let link = window.location.href
      if(link.slice(-1) == "#"){
          link = link.slice(0, -1)
      }
      link = link + "?ref=";
      return link
  }

  async function requestAccount() {
    if(window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        setWalletAddress(accounts[0]);
        console.log("Wall addy", walletAddress)
        share();
      } catch (error) {
        console.log("Error connecting")
      }
    } else {
      console.log("Not detected")
    }
  }

  function disconnectAccount(){
    window.location.reload();
  }

  function useEffect () {
    requestAccount()
  }

  return (
    <div className="App">
      <header className="App-header">
      <>
        <div className='header'>
          {
            window.ethereum.isConnected() ?
            <button onClick={disconnectAccount}>{walletAddress.slice(0, 5)}...{walletAddress.slice(-4)}</button>
            : <button onClick={requestAccount}>CONNECT WALLET</button>
          }
        </div>
      </>
      </header>


      <Card refLink={share}/>
    </div>
  );
}

export default App;
