import React, { Component } from "react";
import axios from "axios";
import "./Info.css";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }

  componentDidMount() {
    axios.get("/api/getInfo").then(response => {
      // console.log(response);
      this.setState({ info: response.data });
    });
  }

  render() {
    const { info } = this.state;
    return (
      <div>
        <div className="infomain">
          <div className="list">
            <p id="spacex">Company Information</p>
            <p>Founder & CEO: {info.ceo}</p>
            <p> Year Founded: {info.founded}</p>
            <p># of Employees: {info.employees} </p>
            <p>Valuation: ${info.valuation}</p>
            <p>Location:</p>
            <p>
              {info.headquarters && info.headquarters.address},{" "}
              {info.headquarters && info.headquarters.city},{info.headquarters &&
                info.headquarters.state}
            </p>
            <div>
              <p />
              <p>{info.summary}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
