import React, { Component } from 'react';
import DisplayImages from './DisplayImages.js';
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
      categorie: "tous",
      focusImage: ""
    }
  }

  setBackgroundHeight() {
    var body = document.body, html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    $('#background-dark').css('height', height);
  }

  displayImageFocus() {
    setTimeout(() => {
      $('.img-fluid').on('click', (e) => {
        this.setState({
          focusImage: e.target.getAttribute('src')
        });
        $('#focus-image').attr('style', 'display: block !important');
        $('#background-dark').attr('style', 'display: block !important');
        this.setBackgroundHeight();
      });
    }, 100);
  }

  componentDidMount() {
    $('li').on('click', (e) => {
      this.setState({
        categorie: e.target.id
      });
    });
    $('#background-dark').on('click', (e) => {
      if (e.target.id !== 'focus-image') {
        $('#focus-image').attr('style', 'display: none !important');
        $('#background-dark').attr('style', 'display: none !important');
      }
    });
    $(window).resize(() => {
      this.setBackgroundHeight();
    });
    this.displayImageFocus();
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
        <div id="background-dark" style={{display: 'none'}}></div>
        <div id="focus-image">
          <img src={this.state.focusImage}/>
        </div>
      </main>
    );
  }
}

export default App;
