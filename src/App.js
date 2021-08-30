import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import CardOwnership from './CardOwnership.json';
import Types from './Types.ts';
import { useEffect } from 'react';

const App = () => {

  let account = '0x0'

  useEffect(() => {
    window.ethereum.enable();

    async function setup() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const accounts = await web3.eth.getAccounts();
      account = accounts[0];
      web3js = new Web3(web3js.currentProvider);
      const ubeezAddress = '0x5777097744979aD86cBaFa610d9f941987565D9d';
      // eslint-disable-next-line no-unused-vars
      const ubeez = new web3js.eth.Contract(CardOwnership.abi, ubeezAddress);
    }

  }, [])



  function startApp() {
    console.log('TEST PLAYER', getPlayer(0));
    console.log('TEST OWNER', getOwner(0));
  }

  function getOwner(id) {
    return ubeez.methods.ownerOf(id).call();
  }

  function getPlayer(id) {
    return ubeez.methods.playerIdToPlayer(id).call();
  }

  let web3js = new Web3(Web3.givenProvider || "http://localhost:8545");
  web3js.eth.getAccounts().then(console.log);

  window.addEventListener('load', () => {
  
    // if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider

    // } else {
      // Handle the case where the user doesn't have web3. Probably
      // show them a message telling them to install Metamask in
      // order to use our app.
      // console.log('undetected');
    // }

    startApp();
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={ createPlayer }>Create</button>
      </header>
    </div>
  );
}

export default App;
