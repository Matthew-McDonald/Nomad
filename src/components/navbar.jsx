import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className = "navBar">
          <div className="navGridOne"></div>
          <div className="navGridTwo">
          <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Europe">Europe</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/SouthAmerica">South America</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Asia">Asia</NavLink>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;
