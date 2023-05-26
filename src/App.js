import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePool from './components/body/CreatePool';
import Main from "./components/body/Main";
import Navbar from './components/navbar/Navbar';
import Pool from './components/navbar/Pool';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="/CreatePool" element={<CreatePool/>}/>
      </Routes>
    </Router>
  );
}

export default App;
