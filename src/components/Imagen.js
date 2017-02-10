import React, { Component } from 'react';
import { Panel} from 'react-bootstrap';

export default class Imagen extends Component {

  getImage() {
      if (this.props.image.cover) {
        return '//imgur.com/' + this.props.image.cover + '.jpg';
      }
      return this.props.image.link.replace('http://', '//');
  }

  render() {
      return (
      <Panel
        header={this.props.image.title}
        bsStyle='primary'>

        <p>{this.props.image.description}</p>

        <a
          href={this.props.image.link}
          target='_blank'>

          <img
            className='img-responsive'
            alt='Imgur no pudo cargarse'
            src={this.getImage()} 
            />
        </a>
      </Panel>
    );
  }
}