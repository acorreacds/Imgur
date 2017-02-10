import React, { Component } from 'react';
import Header from './Header';
import ListadoImagenes from './ListadoImagenes';

const CLIENT_ID = '1d6ca4e0a415d31';
const apiImgurDefault = 'https://api.imgur.com/3/gallery/hot/';

var setInit = {mode: 'cors', headers: {Authorization: 'Client-ID ' + CLIENT_ID}};

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {imagenes: [], filtro: `viral` ,pagina: 0};
  };

  cargarImagenes(pagina = 0, filtro = `viral`) {
    fetch(`${apiImgurDefault}${filtro}/${pagina}`, setInit)
    .then( response => {return response.json();})
    .then( resp => {this.setState({imagenes: resp.data, filtro: filtro, pagina: pagina});});
  }

  cambio(event){
    this.setState({filtro: event.target.value});
    this.cargarImagenes(this.state.pagina, event.target.value);
  }

  componentDidMount() {
    this.cargarImagenes();
  }

  
  render() {

    var estiloFiltro = {
      textAlign: 'center',
      verticalAlign: 'middle'
    };
  
    return (
      
      <div className="App" style={estiloFiltro}>
       
        <Header pagina={this.state.pagina} filtro={this.state.filtro} cargarImagenes={this.cargarImagenes.bind(this)} />;
        
        <h2>
        <br></br>
          <b>Seleccione un filtro:  </b>
          <select class="selectpicker"
           onChange={this.cambio.bind(this)}
           >
            <option value="viral">viral</option>
            <option value="top">top</option>
            <option value="time">time</option>
          </select>
          
        </h2>
        <ListadoImagenes images={this.state.imagenes} />
        
    }
      </div>
    );
  }
}

