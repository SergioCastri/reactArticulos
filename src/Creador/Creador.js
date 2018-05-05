import React, { Component } from 'react';
import './Creador.css';
import PropTypes from 'prop-types';

const porClave = (nombreKey, valor) => ({
  [nombreKey]: valor,
})

class Creador extends Component {

  constructor() {
    super();
    this.state = {
      colorLetra: '',
      titulo: '',
      cuerpo: '',
      referencias: '',
      url: ''
    }
  }


  manejador(clave, valor) {
    this.setState(
      porClave(clave, valor)
    );
    this.props.sendData(this.state.titulo, this.state.cuerpo, this.state.referencias, this.state.url);
  }

  render() {
    return (
      <div className="App">
        <table className="tablaArt">
          <tbody>
           {/*  <td>
              <div className="texto">Letra negra:</div>
            </td>
            <td>
              <button className="colorBlack"
                onChange={event => this.manejador('colorLetra', event.target.value)}
              />
            </td>

            <td>
              <div className="texto">Letra Azul:</div>
            </td>
            <td>
              <button className="colorBlue"
                onChange={event => this.manejador('colorLetra', event.target.value)}
              />
            </td> */}
            <tr>


              <td>
                <div className="texto">Titulo del Articulo:</div>
              </td>
              <td>
                <input className="campoForm"
                  type="text"
                  onChange={event => this.manejador('titulo', event.target.value)}
                  placeholder="Titulo"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div className="texto" >Imagen Principal:</div>
              </td>
              <td>
                <input className="campoForm"
                  type="text"
                  onChange={event => this.manejador('url', event.target.value)}
                  placeholder="Url de la imagen"

                />
              </td>
            </tr>
            <tr>
              <td>
                <div className="texto">Cuerpo del Articulo:</div>
              </td>
              <td>
                <textarea className="campoArea" rows="10" cols="50"
                  type="text"
                  onChange={event => this.manejador('cuerpo', event.target.value)}
                  placeholder="Cuerpo">
                </textarea>
              </td>
            </tr>
            <tr>
              <td>
                <div className="texto">Referencias:</div>
              </td>
              <td>
                <textarea className="campoArea" rows="3" cols="50"
                  type="text"
                  onChange={event => this.manejador('referencias', event.target.value)}
                  placeholder="Referencias"

                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Creador;
