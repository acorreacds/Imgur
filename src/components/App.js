import React, { Component } from 'react';
import Header from './Header';
import ListadoImagenes from './ListadoImagenes';
const CLIENT_ID = '1d6ca4e0a415d31';
const apiImgur = 'https://api.imgur.com/3/gallery/hot/viral/0';
var setInit = {mode: 'cors', headers: {Authorization: 'Client-ID ' + CLIENT_ID}};

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {imagenes: [], pagina: 0};
  };

  cargarImagenes(pagina = 0) {

    fetch(`https://api.imgur.com/3/gallery/hot/viral/${pagina}`, setInit)
    .then( response => {return response.json();})
    .then( resp => {this.setState({imagenes: resp.data, pagina: pagina});});
  }

  filtrar() {

  }

  componentDidMount() {
    this.cargarImagenes();
  }
  
  render() {
  
    return (
      
      <div className="App">
        <Header pagina={this.state.pagina} cargarImagenes={this.cargarImagenes.bind(this)} />
        <ListadoImagenes images={this.state.imagenes} />}
      </div>
    );
  }
}

