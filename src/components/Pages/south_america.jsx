import React, { Component } from 'react';
import SouthAmericaCard from './south_america_card.jsx'

import '../../styles/SouthAmerica.css'

class SouthAmerica extends Component {
  render() {
    return (
      <div className="southAmericaBackground">
        <div className="southAmericaTitle">
          <h1>South America</h1>
        </div>
        <SouthAmericaCard />
      </div>
    )

  }
}

export default SouthAmerica;
