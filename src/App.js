import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotonPanic from './components/BotonPanic';
import ImplementacionAcuerdoPaz from './components/ImplementacionAcuerdoPaz';
import EducacionIntercultural from './components/EducacionIntercultural';
import MonitoreoCorrupcion from './components/MonitoreoCorrupcion';
import ConectividadRural from './components/ConectividadRural';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BotonPanic />} />
        <Route path="/implementacion-acuerdo-paz" element={<ImplementacionAcuerdoPaz />} />
        <Route path="/educacion-intercultural" element={<EducacionIntercultural />} />
        <Route path="/monitoreo-corrupcion" element={<MonitoreoCorrupcion />} />
        <Route path="/conectividad-rural" element={<ConectividadRural />} />
      </Routes>
    </Router>
  );
}

export default App;
