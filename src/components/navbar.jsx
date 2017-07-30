import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Europe">Europe</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/SouthAmerica">South America</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Asia">Asia</NavLink>
        </nav>
      </div>
    )
  }
}

export default NavBar;
