import React, { Component } from 'react';
import AsiaCard from './asiaCard.jsx';

import '../../styles/Asia.css'

class Asia extends Component {
  render() {
    return (
      <div className="asiaBackground">
        <div className="asiaTitle">
          <h1>Asia</h1>
        </div>
        <AsiaCard />
      </div>
    )
  }
}

export default Asia;
