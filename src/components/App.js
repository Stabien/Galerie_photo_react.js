import React, { Component } from 'react';
import DisplayImages from './DisplayImages.js';
import FocusImage from './FocusImage.js';
import '../css/App.css';
import 'jquery/dist/jquery.js';
import $ from 'jquery';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categorie: "tous"
    }
  }

  componentDidMount() {
    $('li').on('click', (e) => {
      this.setState({
        categorie: e.target.id
      });
      $('li').css({
        'background': 'white',
        'color': 'black'
      });
      e.target.style.background = '#0EC5DC';
      e.target.style.color = 'white';
    });
  }

  render() {
    return (
      <main className="page bg-white">
        <h1 id="title">GALERIE</h1>
        <div className="navbar navbar-expand-lg container" id="nav_container">
          <div id="responsive-menu-container">
            <h1 id="title-md">GALERIE</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <nav className="collapse navbar-collapse justify-content-end" id="navbar-content">
            <ul className="navbar-nav">
              <li className="nav-item nav-link" id="tous">TOUS</li>
              <li className="nav-item nav-link" id="modernes">MODERNES</li>
              <li className="nav-item nav-link" id="contemporains">CONTEMPORAINS</li>
              <li className="nav-item nav-link" id="portraits">PORTRAITS</li>
              <li className="nav-item nav-link" id="paysages">PAYSAGES</li>
            </ul>
          </nav>
        </div>
        <div className="container">
          <DisplayImages categorie={this.state.categorie}/>
        </div>
        <FocusImage/>
      </main>
    );
  }
}

export default App;
