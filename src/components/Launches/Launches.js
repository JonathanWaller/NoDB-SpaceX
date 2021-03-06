import React, { Component } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import "./Launches.css";

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      viewList: [],
      filter: ""
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

  // filterLaunchHandler = e => {
  //   this.setState({ filter: e.target.value });

  //   axios.get(`/api/people/filter?filter=${e.target.value}`).then(response => {
  //     this.setState({ launches: response.data });
  //   });
  // };

  render() {
    console.log(this.state.launches);
    let launchesList = this.state.launches.map((elem, ind) => {
      let patches = elem.links.mission_patch_small;
      let link = elem.links.article_link;
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
          <a href={link}>About Launch</a>
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
      <div>
        <p className="launchtitle">Past Launches</p>
        {/* <input
          value={this.state.filter}
          onChange={event => this.filterLaunchHandler(event)}
          placeholder="search year"
        /> */}
        {/* <button onClick={() => this.searchHandler()}>Search</button> */}
        <div className="mainlaunch">{launchesList}</div>
        <Footer />
      </div>
    );
  }
}

export default Launches;
