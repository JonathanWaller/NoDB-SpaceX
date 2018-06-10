import React, { Component } from "react";
import axios from "axios";
import "./Weather.css";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weather: []
    };
  }

  componentDidMount() {
    axios.get("/api/getWeather").then(response => {
      // console.log(response);
      this.setState({ weather: response.data });
    });
  }

  render() {
    const { weather } = this.state;
    // let elem = this.state.weather;
    // let weatherList = this.state.weather.map((elem, ind) => {
    //   return (
    // <ul key={ind} className="weatherCard">
    //   <li>{elem.name}</li>
    //   <li>{elem.weather[0].description}</li>
    //   <li>{elem.main.temp}</li>
    //   {/* //{" "} */}
    // </ul>;
    //   );
    // });
    return (
      <div className="weathermain">
        <ul className="weatherlistmain">
          <li>Current City: {weather.name}</li>
          <li>{weather.main && weather.main.temp} F</li>
          <li>Humdity: {weather.main && weather.main.humidity}</li>
          <li>{weather.weather && weather.weather[0].description}</li>
          <li>{weather.weather && weather.weather[0].main}</li>

          {/* <li>{weather.weather && weather.weather[0].id}</li> */}
        </ul>
      </div>
    );
  }
}

export default Weather;
