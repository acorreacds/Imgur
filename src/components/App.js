import React, { Component } from 'react';
import Header from './Header';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {imagenes: [], pagina: 0, loaded: false};
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

