import React from 'react'
import './header.css'

const Header = (getAddress) => {

  const [walletAddress, setWalletAddress] = React.useState("")

  async function requestAccount() {
    if(window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        setWalletAddress(accounts[0]);
        getAddress(walletAddress);
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

  return (
    <>
        <div className='header'>
          {
            window.ethereum.isConnected() ?
            <button onClick={disconnectAccount}>{walletAddress.slice(0, 5)}...{walletAddress.slice(-4)}</button>
            : <button onClick={requestAccount}>CONNECT WALLET</button>
          }
        </div>
    </>
  )
}

export default Header