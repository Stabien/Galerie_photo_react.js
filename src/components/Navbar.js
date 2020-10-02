import React, { Component } from 'react';
import NavItem from './NavItem.js'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className="navbar navbar-expand-lg container" id="nav_container">
        <div id="responsive-menu-container">
          <h1 id="title-md">GALERIE</h1>
          <button className="navbar-toggler" type="button"
          data-toggle="collapse" data-target="#navbar-content">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <nav className="collapse navbar-collapse justify-content-end" id="navbar-content">
          <NavItem/>
        </nav>
      </div>
    )
  }
}

export default Navbar;
