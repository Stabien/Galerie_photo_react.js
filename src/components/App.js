import React, { Component } from 'react';
import DisplayImages from './DisplayImages.js'
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'

class App extends Component {
  render() {
    return (
      <main className="page bg-white">
        <div className="container">
          <h1>GALERIE</h1>
            <nav>
              <ul>
                <li>TOUS</li>
                <li>MODERNES</li>
                <li>CONTEMPORAINS</li>
                <li>PORTRAITS</li>
                <li>PAYSAGES</li>
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
