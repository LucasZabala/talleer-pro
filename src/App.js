
import './App.css';
import Grid from './Grillas/Grillas.js';
import Btns from './Componentes/Btns.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import DbFirebase from './Grillas/DbFirebase.js';
import 'stream-browserify';
import 'stream-http';
// ... y así para todos los demás módulos

function App() {

  return (
    <div className='App'>
      <header>

        <img src={require('./Imagen/Logo Ap.png')} alt='APUNAO' className='logo' />

        <div className='cont_logos'>

          {/* Grillas */}
          <Btns
            clase='material-symbols-outlined logos_header'
            titulo='Grilla'
            logo='grid_on'
          />

          {/* <!-- reporte --> */}
          <Btns
            clase='material-symbols-outlined logos_header'
            titulo='Reportes'
            logo='list_alt'
          />

          {/* <!-- mensaje --> */}
          <Btns
            clase='material-symbols-outlined logos_header'
            titulo='Mensajes'
            logo='mail'
          />

          {/* <!-- alerta --> */}
          <Btns
            clase='material-symbols-outlined logos_header'
            titulo='Alertas'
            logo='priority_high'
          />

          {/* <!-- crear usuario --> */}
          <Btns
            clase='material-symbols-outlined logos_header'
            titulo='Usuario'
            logo='account_circle'
          />

          {/* <!-- salir de pagina --> */}
          <Btns
            clase='material-symbols-outlined logos_header'
            titulo='Salir'
            logo='logout'
          />

        </div>

      </header>

      <main>

        <Router>
          <Routes>
            <Route path="/" element={<Grid />} />
          </Routes>
        </Router>


      </main>

    </div>
  );
}

export default App;
