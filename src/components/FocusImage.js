import React, { Component } from 'react';
import 'jquery/dist/jquery.js';

class FocusImage extends Component {
  constructor(props) {
    super(props);
  }

  sendDataToParent() {
    this.props.display(false);
  }

  setBackgroundHeight() {
    var body = document.body, html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight,
                          html.clientHeight, html.scrollHeight, html.offsetHeight);
    return height;
  }

  render() {
    return(
      <div id="return-container">
        <div
          id="background-dark"
          onClick={() => this.sendDataToParent()}
          style={{height: this.setBackgroundHeight()}}>
        </div>
        <div id="focus-image">
          <img src={this.props.path} alt="focus"/>
        </div>
      </div>
    );
  }
}

export default FocusImage;
