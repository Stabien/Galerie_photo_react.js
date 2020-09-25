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
      if (this.props.categorie == "tous" || item.categorie == this.props.categorie) 
        return(
          <div key={item.id} className="col-lg-4 col-md-6">
            <img src={item.path} alt="images"/>
          </div>
        );
    });
    return <div className="row">{listItems}</div>;
  }
}

export default DisplayImages;
