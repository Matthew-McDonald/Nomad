import React, { Component } from "react";
import "../../styles/Home.css";

class Home extends Component {
  render() {
    return (
        <div className="Home backgroundMain">
          <div className="Home-header">
            <h2>Home</h2>
          </div>
          <p className="Home-intro">You on the Main Page my man!</p>
        </div>

    );
  }
}

export default Home;
