// MonitoreoCorrupcion.js
import React, { Component } from 'react';

class MonitoreoCorrupcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monitoreoCorrupcion: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ monitoreoCorrupcion: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Monitoreo de corrupción enviado:', this.state.monitoreoCorrupcion);
  };

  render() {
    return (
      <div>
        <h2>Monitoreo de Corrupción</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Describa el monitoreo de corrupción:
            <textarea value={this.state.monitoreoCorrupcion} onChange={this.handleInputChange} />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default MonitoreoCorrupcion;