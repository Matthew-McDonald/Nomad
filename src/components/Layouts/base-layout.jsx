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
          <div className="footerWrapper">
          <div className="contactUs">
            <a className="contactUsLink"href="/ContactUs">Contact Us</a>
          </div>
          <div className="aboutUs">
            <a className="aboutUsLink"href="/AboutUs">About Us</a>
          </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default BaseLayout;
