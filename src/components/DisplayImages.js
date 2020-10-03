import React, { Component } from 'react';
import FocusImage from './FocusImage.js';

class DisplayImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myImages: [],
      displayFocusImage: false,
      pathFocusImage: ""
    }
    this.callBackFocusImage = this.callBackFocusImage.bind(this);
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        this.setState({
          myImages: result
        });
      });
  }

  getMaxWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  callBackFocusImage(displayData) {
    if (this.getMaxWidth() > 575)
      this.setState({
        displayFocusImage: displayData
      });
  }

  render() {
    const listItems = this.state.myImages.map(item => {
      if (this.props.categorie === "tout" || item.categorie === this.props.categorie)
        return(
          <div key={item.id} className="col-lg-4 col-md-6">
            <img src={item.path} alt={"img " + item.id} className="img-fluid"
            onClick={() => {
              this.callBackFocusImage(true);
              this.setState({pathFocusImage: item.path});
            }}/>
          </div>
        );
    });
    if (this.state.displayFocusImage === true)
      return(
        <div>
          <div className="row no-gutters">{listItems}</div>
          <FocusImage
            display={this.callBackFocusImage}
            path={this.state.pathFocusImage}
          />
        </div>
      );
    else
      return (
        <div>
          <div className="row no-gutters">{listItems}</div>
        </div>
      );
  }
}

export default DisplayImages;
