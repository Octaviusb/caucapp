import React, { useState } from 'react';

function ConectividadRural() {
  const [conectividadRural, setConectividadRural] = useState('');

  const handleInputChange = (event) => {
    setConectividadRural(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes añadir la lógica de envío
    console.log('Descripción de conectividad rural:', conectividadRural);
  };

  return (
    <div>
      <h2>Conectividad Rural</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Describa la conectividad rural:
          <textarea value={conectividadRural} onChange={handleInputChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ConectividadRural;
