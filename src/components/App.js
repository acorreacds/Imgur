import React, { Component } from 'react';
import Header from './Header';
const CLIENT_ID = '1d6ca4e0a415d31';
const apiImgur = 'https://api.imgur.com/3/gallery/hot/viral/0';
var setInit = {mode: 'cors', headers: {Authorization: 'Client-ID ' + CLIENT_ID}};

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {imagenes: [], pagina: 0, loaded: false};
  };

  obtenerImagenes(){

    fetch(apiImgur, setInit)
    .then( (response) => {return response.json();})
    .then( (resp) => {this.setState({imagenes: resp.data, pagina: pagina, loaded: true});
  }
  
  render() {
  
    return (
      
      <div className="App">
        <Header page={this.state.pagina} /*loadImages={this.loadImages.bind(this)}*/ />
          {/*<h2>Welcome to React</h2>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
      </div>
    );
  }
}

