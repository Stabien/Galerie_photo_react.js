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
        this.setState({
          myImages: result
        })
      });
  }

  render() {
    const listItems = this.state.myImages.map(item => (
      <div className="col-lg-4 col-md-6">
        <img src={item.path} alt="images"/>
      </div>
    ));
    return <div className="row">{listItems}</div>;
  }
}

export default DisplayImages;
