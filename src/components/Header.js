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
            onClick={() => this.props.loadImages(this.props.page - 1)}
            disabled={this.props.page <= 0}>
            <Glyphicon glyph='arrow-left' /> Previo
          </NavItem>
          <NavItem onClick={() => this.props.loadImages(this.props.page + 1)}>
            Siguiente <Glyphicon glyph='arrow-right' />
          </NavItem>
        </Nav>

      </Navbar>
    );

  }

}