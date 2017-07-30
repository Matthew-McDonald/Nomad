import React, { Component } from "react";
import "../../styles/Home.css";

class Home extends Component {
  render() {
    return (
        <div className="Home backgroundMain">
          <div className="Home-header">
            <h1>Nomad</h1>
          </div>
          <p className="Home-intro">Bringing the community together through travel</p>
        </div>

    );
  }
}

export default Home;
