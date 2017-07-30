import React, { Component } from "react";
import tripData from "../tripData.js";

import "../../styles/Europe.css";

class SouthAmericaCard extends Component {
  render() {
    let southAmericaCards = tripData.SouthAmerica.map(trip => {
      return (
        <div className="">
          <div className="col-7" key={trip.id}>
            <div className="card tripCard">
              <div className="card-block">
                <div className="row">
                <div className="tripImage col">
                  <img className="thumbNail" src={trip.thumbnail} />
                </div>
                <div className="tripInfo col">
                  <div className="card-title">
                    <h5>
                      Trip: {trip.title}
                    </h5>
                  </div>
                  <div className="card-text">
                    <p>
                      Trip Info: {trip.description}
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="europeCardList">
          {southAmericaCards}
      </div>
    );
  }
}

export default SouthAmericaCard;
