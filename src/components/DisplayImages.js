import React, { Component } from 'react';

class DisplayImages extends Component {
  constructor() {
    super();
    this.state = {
      myImages: []
    }
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const images = result.map(item => {
          return item;
        });
        this.setState({
          myImages: images
        })
      });
  }

  render() {
    const listItems = this.state.myImages.map(item => (
      <div className="col-4">
        <img src={item.path} alt="images"/>
      </div>
    ));
    return <div className="row">{listItems}</div>;
  }
}

export default DisplayImages;
