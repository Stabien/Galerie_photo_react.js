import React, { Component } from 'react';
import 'jquery/dist/jquery.js';

class FocusImage extends Component {
  setBackgroundHeight() {
    var body = document.body, html = document.documentElement;
    return Math.max(body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight);
  }

  render() {
    return(
      <div id="return-container">
        <div
          id="background-dark"
          onClick={() => this.props.display(false)}
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
