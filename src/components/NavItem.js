import React, { Component } from 'react';

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.navItemRef = [React.createRef()];
  }

  changeStyleNavItem(e) {
    for (var ref in this.navItemRef) {
      this.navItemRef[ref].style.background = "white";
      this.navItemRef[ref].style.color = "black";
    }
    e.target.style.background = "#0EC5DC";
    e.target.style.color = "white";
    this.props.categorieName(e.target.id);
  }

  render() {
    const categories = ["tous", "modernes", "contemporains", "portraits", "paysages"];
    const listItems = categories.map((item, index) => {
      return(
        <li
          className="nav-item nav-link"
          key={index}
          id={item}
          onClick={(e) => this.changeStyleNavItem(e)}
          ref={item => this.navItemRef[index] = item}
        >
          {item.toUpperCase()}
        </li>
      );
    });
    return (
      <ul className="navbar-nav">{listItems}</ul>
    );
  }
}

export default NavItem;
