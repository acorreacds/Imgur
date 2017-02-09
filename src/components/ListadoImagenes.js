import React, { Component } from 'react';
import Imagen from './Imagen';
import { Grid } from 'react-bootstrap';

export default class ListadoImagenes extends Component {

  render() {

    return (
      <Grid style={{paddingTop: '70px'}}>

        {this.props.images.map(function(image) {
          return (
            <Imagen
              image={image}
              key={image.id} />
          );
        })}

      </Grid>
    );
  }
}