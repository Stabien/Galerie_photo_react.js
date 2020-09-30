import React, { Component } from 'react';
import 'jquery/dist/jquery.js';
import $ from 'jquery';

class FocusImage extends Component {
  constructor() {
    super();
    this.state = {
      focusImage: ""
    }
  }

  getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
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
        if (this.getWidth() > 575) {
          this.setState({
            focusImage: e.target.getAttribute('src')
          });
          $('#focus-image').css('display', 'block');
          $('#background-dark').css('display', 'block');
          setTimeout(() => {
            if (this.getWidth() > 991)
              $('#focus-image img').css({
                'width': '700px',
                'height': '400px'
              });
            else {
              $('#focus-image img').css({
                'width': '500px',
                'height': '300px'
              });
            }
          }, 0);
          this.setBackgroundHeight();
      }
      });
    }, 100);
  }

  componentDidMount() {
    $('#background-dark').on('click', (e) => {
      if (e.target.id !== 'focus-image') {
        $('#focus-image img').css({
          'width': '0px',
          'height': '0px'
        });
        $('#focus-image').css('display', 'none');
        $('#background-dark').css('display', 'none');
      }
    });
    $(window).resize(() => {
      this.setBackgroundHeight();
      if (this.getWidth() <= 575) {
        $('#focus-image img').css({
          'width': '0px',
          'height': '0px'
        });
        $('#focus-image').css('display', 'none');
        $('#background-dark').css('display', 'none');
      }
      else if (this.getWidth() > 575 && this.getWidth() <= 991) {
        $('#focus-image img').css({
          'width': '500px',
          'height': '300px'
        });
      }
      else {
        $('#focus-image img').css({
          'width': '700px',
          'height': '400px'
        });
      }

    });
    this.displayImageFocus();
  }

  render() {
    return(
      <div id="return-container">
        <div id="background-dark" style={{display: 'none'}}></div>
        <div id="focus-image">
          <img src={this.state.focusImage} alt="focus"/>
        </div>
      </div>
    );
  }
}

export default FocusImage;
