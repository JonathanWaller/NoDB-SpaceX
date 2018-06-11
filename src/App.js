import React, { Component } from "react";
import "./App.css";
import Rockets from "./components/Rockets/Rockets";
import Info from "./components/Info/Info";
import Launches from "./components/Launches/Launches";
import Weather from "./components/Weather/Weather";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ViewList from "./components/ViewList/ViewList";
import Footer from "./components/Footer/Footer";
import Parallax from "./components/Parallax/Parallax";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      homeShow: true,
      // infoShow: true,
      // rocketsShow: true,
      launchesShow: false,
      listShow: false
    };
    this.launchesHandler = this.launchesHandler.bind(this);
    this.homeHandler = this.homeHandler.bind(this);
    this.watchHandler = this.watchHandler.bind(this);
  }

  homeHandler() {
    this.setState({
      homeShow: true,
      // infoShow: true,
      // rocketsShow: true,
      launchesShow: false,
      listShow: false
    });
  }

  launchesHandler() {
    this.setState({
      homeShow: false,
      // infoShow: false,
      // rocketsShow: false,
      launchesShow: true,
      listShow: false
    });
  }

  watchHandler() {
    this.setState({
      homeShow: false,
      launchesShow: false,
      listShow: true
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar
          launches={this.launchesHandler}
          home={this.homeHandler}
          watch={this.watchHandler}
        />
        {this.state.homeShow ? <Info /> : null}
        {this.state.homeShow ? <Parallax /> : null}
        {this.state.homeShow ? <Rockets /> : null}
        {this.state.launchesShow ? <Launches /> : null}
        {this.state.listShow ? <ViewList /> : null}
        {/* <Info /> */}
        {/* <Rockets /> */}
        {/* <Launches /> */}
        {/* {this.state.rocketsShow ? <Rockets /> : <Launches />} */}
        {/* <ViewList /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
