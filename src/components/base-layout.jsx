import React, { Component } from 'react';

import NavBar from './navbar.jsx';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <h1>Header</h1>
          </div>
          <div>
            <a>Contact Us</a>
          </div>
          <div>
            <a>About Us</a>
          </div>
          <br />
          <NavBar />
        </header>
        {this.props.children}
        <footer>
          <h2>Footer</h2>
        </footer>
      </div>
    )
  }
}

export default BaseLayout;
