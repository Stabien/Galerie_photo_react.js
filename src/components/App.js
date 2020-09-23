import React, { Component } from 'react';
import DisplayImages from './DisplayImages.js'
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'

class App extends Component {
  render() {
    return (
      <main className="page bg-white">
        <h1>GALERIE</h1>
        <div className="navbar navbar-expand-lg container">
            <nav className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">TOUS</li>
                <li className="nav-item">MODERNES</li>
                <li className="nav-item">CONTEMPORAINS</li>
                <li className="nav-item">PORTRAITS</li>
                <li className="nav-item"i>PAYSAGES</li>
              </ul>
            </nav>
        </div>
        <div className="container">
          <DisplayImages />
        </div>
      </main>
    );
  }
}

export default App;
