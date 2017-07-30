import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink activeClassName="selected" className="nav-link" exact to="/">Main</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/page_one">Europe</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/page_two">Asia</NavLink>
        </nav>
      </div>
    )
  }
}

export default NavBar;
