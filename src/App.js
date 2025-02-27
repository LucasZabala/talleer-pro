

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/Home.js';
import Grid from './Grillas/Grillas.js';

import './App.css';

function App() {


  return (
    <div className='App'>

      <Router>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/Grid" element={<Grid />} />

          {/* <Route path="*" element={<Grid />} /> */}
        </Routes>
      </Router>
    </div>

  );
}

export default App;
