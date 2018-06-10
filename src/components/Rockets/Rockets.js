import React, { Component } from "react";
import axios from "axios";
import "./Rockets.css";

class Rockets extends Component {
  constructor() {
    super();
    this.state = {
      rockets: []
    };
  }

  componentDidMount() {
    axios.get("/api/getRockets").then(response => {
      // console.log(response);
      this.setState({ rockets: response.data });
    });
  }

  render() {
    let rocketsList = this.state.rockets.map((elem, ind) => {
      return (
        <ul key={elem.id} className="rocketcard">
          <li>{elem.name}</li>
          <li>{elem.first_flight}</li>
          <li>{elem.cost_per_launch}</li>
        </ul>
      );
    });
    return (
      <div>
        <h1>Rockets</h1>
        {rocketsList}
      </div>
    );
  }
}

export default Rockets;
