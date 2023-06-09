import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePool from './components/body/CreatePool';
import Main from "./components/body/Main";
import Navbar from './components/navbar/Navbar';
import ".././src/App.css"
import Pool from './components/navbar/Pool';


function App() {
  const [accounts, setAccounts] = useState([])
  const web3Provider = ("https://goerli.infura.io/v3/4eed25b0bc4342529e3e61363f2d8d1a")
  const [isConnected] = useState();
  return (
    <div className='App'>
    <Router>
      <Navbar isconnected={isConnected} accounts={accounts}  setAccounts={setAccounts}/>
      <Routes>
        <Route path="/" element={<Main web3Provider={web3Provider} isconnected={isConnected} accounts={accounts} setAccounts={setAccounts}/>} />
        <Route path="/pool" element={<Pool web3Provider={web3Provider} isconnected={isConnected}  accounts={accounts} setAccounts={setAccounts}/>} />
        <Route path="/CreatePool" element={<CreatePool web3Provider={web3Provider} isconnected={isConnected}  accounts={accounts} setAccounts={setAccounts}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
