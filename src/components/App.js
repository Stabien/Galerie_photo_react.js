import React, { Component } from 'react';
import DisplayImages from './DisplayImages.js';
import Navbar from './Navbar.js';
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
    this.callBackNavbar = this.callBackNavbar.bind(this);
  }

  callBackNavbar(displayData) {
    this.setState({
      categorie: displayData
    });
  }

  render() {
    return (
      <main className="page bg-white">
        <h1 id="title">GALERIE</h1>
        <Navbar categorieName={this.callBackNavbar}/>
        <div className="container">
          <DisplayImages categorie={this.state.categorie}/>
        </div>
      </main>
    );
  }
}

export default App;
