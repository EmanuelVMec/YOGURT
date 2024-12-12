import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioAdministrador from './InicioAdministrador.tsx';
import DatatableScreen from './DatatableScreen.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioAdministrador />} /> {/* Ruta del login */}
        <Route path="/DatatableScreen" element={<DatatableScreen />} /> {/* Ruta del registro */}
      </Routes>
    </Router>
  );
}

export default App;