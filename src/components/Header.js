import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

export default class Header extends Component {

  render() {

    return (
      <Navbar
        fixedTop={true}
        toggleNavKey={0}>
      <Navbar.Brand>
            <p>Imgur Gallery</p>
      </Navbar.Brand>

        <Nav right eventKey={0}>
          <NavItem
            onClick={() => this.props.cargarImagenes(this.props.pagina - 1, this.props.filtro)}
            disabled={this.props.pagina <= 0}>
            <Glyphicon glyph='arrow-left' /> Previo
          </NavItem>
          <NavItem onClick={() => this.props.cargarImagenes(this.props.pagina + 1, this.props.filtro)}>
            Siguiente <Glyphicon glyph='arrow-right' />
          </NavItem>
        </Nav>

      </Navbar>
    );

  }

}