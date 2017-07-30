import React, { Component } from "react";

import NavBar from "../navbar.jsx";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <div className="">
        <header className="Header">
          <br />
          <NavBar />
        </header>
        {this.props.children}
        </div>
        <footer>
          <div>
            <a>Contact Us</a>
          </div>
          <div>
            <a>About Us</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default BaseLayout;
