
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Componentes/Header.js';
import Form from './ConectedFirebase/Form.js';
import Grid from './Grillas/Grillas.js';


import './App.css';

function App() {
  const [header, setHeader] = useState(false);

  return (
    <div className='App'>
      <Header
        header={header}
      />
      <main>

        <Router>
          <Routes>
            <Route path="/Register" element={<Form />} />
            <Route path="/Grid" element={<Grid />} />
          </Routes>
        </Router>


      </main>

    </div>
  );
}

export default App;
