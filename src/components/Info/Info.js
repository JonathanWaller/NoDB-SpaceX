import React, { Component } from "react";
import axios from "axios";
import "./Info.css";
import Header from "../Header/Header";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }

  componentDidMount() {
    axios.get("/api/getInfo").then(response => {
      console.log(response);
      this.setState({ info: response.data });
    });
  }

  render() {
    const { info } = this.state;
    return (
      <div>
        <Header />
        <div>
          <ul className="list">
            <li id="spacex">SpaceX</li>
            <li>CEO: {info.ceo}</li>
            <li> Year Founded: {info.founded}</li>
            <li>Employees: {info.employees} </li>
            <li>Valuation: ${info.valuation}</li>
            <li>Address:</li>
            <li>
              {info.headquarters && info.headquarters.address},{" "}
              {info.headquarters && info.headquarters.city},{info.headquarters &&
                info.headquarters.state}
            </li>

            <li>{info.summary}</li>
          </ul>
          {/* <Rockets /> */}
        </div>
      </div>
    );
  }
}

export default Info;
