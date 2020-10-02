import React, { Component } from 'react';

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNavItem: ""
    }
  }

  changeStyleNavItem(e) {
    for (var ref in this.refs) {
      this.refs[ref].style.background = "white";
      this.refs[ref].style.color = "black";
    }
    e.target.style.background = "#0EC5DC";
    e.target.style.color = "white";
  }

  render() {
    const categories = ["tous", "modernes", "contemporains", "portraits", "paysages"];
    const listItems = categories.map(item => {
      return(
        <li
          className="nav-item nav-link"
          id={item}
          onClick={(e) => this.changeStyleNavItem(e)}
          ref={item}
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
