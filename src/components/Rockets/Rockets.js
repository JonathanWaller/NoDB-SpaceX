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
        <div key={elem.id} className="rocketcard">
          <p>Name: {elem.name}</p>
          <p>First Flight: {elem.first_flight}</p>
          <p>Cost per Launch: ${elem.cost_per_launch}</p>
          <p>{elem.description}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>Rockets</h1>
        <div className="rocketsmain">{rocketsList}</div>
      </div>
    );
  }
}

export default Rockets;
