import React, { Component } from "react";

import '../../styles/ContactUs.css'

class ContactUs extends Component {
  render() {
    return (
      <div className="contactUsBody">
        <div className="contactUsCard">
        <div className="contactUsTitle">
          <h1>Contact Us</h1>
        </div>
        <div>
          <form>
            <label>
              <input className="formTextArea" type="text" name="name" placeholder="Name" />
            </label>
            <br />
            <label>
              <input className="formTextArea" type="text" placeholder="Email" />
            </label>
            <br />
            <label>
              <input className="questionTextArea" type="text" placeholder="Question" />
            </label>
            <br />
            <div className="submitButton">
              <input className="formSubmitButton"type="submit" value="Submit" />
            </div>
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
