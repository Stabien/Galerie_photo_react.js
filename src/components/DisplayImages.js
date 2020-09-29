import React, { Component } from 'react';

class DisplayImages extends Component {
  constructor(props) {
    super(props);
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
        });
      });
  }

  render() {
    const listItems = this.state.myImages.map(item => {
      if (this.props.categorie === "tous" || item.categorie === this.props.categorie)
        return(
          <div key={item.id} className="col-lg-4 col-md-6"
          data-toggle="lightbox" data-gallery="example-gallery">
            <img src={item.path} alt={"img " + item.id} className="img-fluid"/>
          </div>
        );
      else {
        return(
          <div key={item.id} className="col-lg-4 col-md-6" style={{display: "none"}}
          data-toggle="lightbox" data-gallery="example-gallery">
            <img src={item.path} alt={"img " + item.id} className="img-fluid"/>
          </div>
        );
      }
    });
    return <div className="row no-gutters">{listItems}</div>;
  }
}

export default DisplayImages;
