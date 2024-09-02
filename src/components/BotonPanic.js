import React, { Component } from 'react';

class BotonPanic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerta: false
    };
  }

  handleClick = () => {
    this.setState({ alerta: true });
    // Lógica para enviar la alerta
    console.log('Alerta enviada!');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Botón de Pánico
        </button>
        {this.state.alerta && <div>Alerta enviada!</div>}
      </div>
    );
  }
}

export default BotonPanic;
