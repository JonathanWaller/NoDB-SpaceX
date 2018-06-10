import React, { Component } from "react";
import axios from "axios";
import "./Launches.css";

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      viewList: []
    };
  }

  componentDidMount() {
    axios.get("/api/getLaunches").then(response => {
      // console.log(response.data);
      this.setState({ launches: response.data });
    });
  }

  handleClick(launch) {
    axios.post("/api/addLaunch", launch);
  }

  render() {
    // console.log(this.state.launches);
    let launchesList = this.state.launches.map((elem, ind) => {
      let patches = elem.links.mission_patch_small;
      let clip = elem.links.video_link;
      let newClip = clip.replace("watch?v=", "embed/");
      // let testClip = "https://www.youtube.com/watch?v=0a_00nJ_Y88";
      return (
        <ul key={ind} className="launchcard">
          <li>Mission: {elem.mission_name}</li>
          <li>Year: {elem.launch_year}</li>
          <li>
            <img src={patches} width="60" height="60" />
          </li>
          <li>
            {/* <iframe src="https://www.youtube.com/embed/0a_00nJ_Y88" /> */}
            {/* <iframe src={newClip} frameBorder="0" /> */}
            <button
              onClick={() => {
                this.handleClick(elem);
              }}
              className="addbutton"
            >
              Add to Watch List
            </button>
          </li>
        </ul>
      );
    });
    return (
      <div className="launches">
        <p>test from pastLaunches</p>
        <h1>Past Launches</h1>
        <div className="mainlaunch">
          {launchesList}
          {/* {rocketsList} */}
        </div>
      </div>
    );
  }
}

export default Launches;
