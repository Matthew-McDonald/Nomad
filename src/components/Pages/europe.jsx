import React, { Component } from "react";
import tripData from '../tripData.js'
import EuropeCard from './europeCard.jsx'

import "../../styles/Europe.css";

class Europe extends Component {
  render() {
    return (
      <div className="europeBackground">
        <div className="europeTitle">
          <h1>Europe</h1>
        </div>
        <EuropeCard />
      </div>
    );
  }
}
console.log(tripData.title)
export default Europe;

// <div className="europeHeader">
//   <h1>Europe - Page One</h1>
// </div>
