import React, { useState } from 'react';

function ImplementacionAcuerdoPaz() {
  const [acuerdoPaz, setAcuerdoPaz] = useState('');

  const handleInputChange = (event) => {
    setAcuerdoPaz(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Acuerdo de paz enviado:', acuerdoPaz);
  };

  return (
    <div>
      <h2>Implementación del Acuerdo de Paz</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Describa el acuerdo de paz:
          <textarea value={acuerdoPaz} onChange={handleInputChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ImplementacionAcuerdoPaz;
