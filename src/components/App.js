import React, { Component } from 'react';
import DisplayImages from './DisplayImages.js';
import '../css/App.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categorie: ""
    }
  }

  componentDidMount() {
    $('li').on('click', (e) => {
      this.setState({
        categorie: e.target.id
      });
    });
  }

  render() {
    return (
      <main className="page bg-white">
        <h1>GALERIE</h1>
        <div className="navbar navbar-expand-lg container" id="nav_container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content">
            <span className="navbar-toggler-icon"></span>
          </button>
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
      </main>
    );
  }
}

export default App;
