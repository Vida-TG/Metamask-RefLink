import React from 'react'
import './header.css'

const Header = () => {

  async function requestAccount() {
    if(window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        console.log(accounts);
      } catch (error) {
        console.log("Error connecting")
      }
    } else {
      console.log("Not detected")
    }
  }

  return (
    <>
        <div className='header'>
            <button onClick={requestAccount}>CONNECT WALLET</button>
        </div>
    </>
  )
}

export default Header