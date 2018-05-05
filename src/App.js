import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'; 
import Creador from './Creador/Creador.js';
import VisualizadorMovil from './Visualizador/VisualizadorMovil';
import Visualizador from './Visualizador/Visualizador';



class App extends Component {

  option;
  constructor(){
    super(); 
    this.getData = this.getData.bind(this);
    this.state= ({
      tituloArticulo: '',
      cuerpoArticulo: '',
      referenciasArticulo: '',
      urlArticulo: ''
    });
  }

  getData(tituloR, cuerpoR, refR, urlR){
    this.setState({
      tituloArticulo: tituloR,
      cuerpoArticulo: cuerpoR,
      referenciasArticulo: refR,
      urlArticulo: urlR
    });
}
  render() {
    const {
      tituloArticulo,
      cuerpoArticulo, 
      referenciasArticulo,
      urlArticulo
    }=this.state;
   
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Creador de Articulos</h1>
        </header>
        <select>
          <option value="InterfazWeb">Interfaz Web</option>
          <option value="InterfazMovil">Interfaz Movil</option>

        </select>
        <p className="App-intro">
          <table className="tabla">
            <tbody>
              <tr>
                <th>Publicador</th>
                <th>Visualizador</th>

              </tr>
              <tr>
                <td className="borde">
                  <Creador sendData={this.getData} />
                </td>
                <td className="borde">
                  <Visualizador titulo={tituloArticulo} cuerpo={cuerpoArticulo}
                  referencias = {referenciasArticulo} url = {urlArticulo}/>
                </td>

              </tr>

            </tbody>
          </table>

    

        </p>
      </div>
    );
  }
}

export default App;
