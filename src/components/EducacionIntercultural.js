import React, { useState } from 'react';

function EducacionIntercultural() {
  const [educacionIntercultural, setEducacionIntercultural] = useState('');

  const handleInputChange = (event) => {
    setEducacionIntercultural(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Educación intercultural enviada:', educacionIntercultural);
  };

  return (
    <div>
      <h2>Educación Intercultural</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Describa la educación intercultural:
          <textarea value={educacionIntercultural} onChange={handleInputChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default EducacionIntercultural;
