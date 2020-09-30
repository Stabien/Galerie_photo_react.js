import React, { Component } from 'react';
import 'jquery/dist/jquery.js';

class FocusImage extends Component {
  constructor(props) {
    super(props);
  }

  sendDataToParent() {
    this.props.display(false);
  }

  render() {
    return(
      <div id="return-container">
        <div id="background-dark" onClick={() => this.sendDataToParent()}></div>
        <div id="focus-image">
          <img src={this.props.path} alt="focus"/>
        </div>
      </div>
    );
  }
}

export default FocusImage;
