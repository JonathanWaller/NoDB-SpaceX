import React, { Component } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import "./ViewList.css";

class ViewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewList: [],
      userInput: "f"
    };
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    axios.get("/api/getViewList").then(response => {
      //   console.log(response);
      this.setState({ viewList: response.data });
    });
  }

  deleteHandler = id => {
    axios.delete(`/api/deleteLaunch/${id}`).then(response => {
      // console.log(response);
      this.setState({ viewList: response.data });
    });
  };

  // updateHandler = (id, info) => {
  //   axios
  //     .put(`/api/updateLaunch/${id}`, { mission_name: info })
  //     .then(response => {
  //       this.setState({
  //         viewList: response.data,
  //         userInput: ""
  //       });
  //     });
  // };

  updateHandler = id => {
    axios
      .put(`api/updateLaunch/${id}`, { mission_name: this.state.userInput })
      .then(response => {
        console.log(response);
        this.setState({ viewList: response.data });
      });
  };

  handleInput = event => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    // console.log(this.state.viewList);
    let myViewList = this.state.viewList.map((elem, ind) => {
      let patches = elem.links.mission_patch_small;
      let clip = elem.links.video_link;
      let newClip = clip.replace("watch?v=", "embed/");
      // let testClip = "https://www.youtube.com/watch?v=0a_00nJ_Y88";
      return (
        <ul key={elem.flight_number} className="viewcard">
          <li>Mission: {elem.mission_name}</li>
          <li>Year: {elem.launch_year}</li>
          <li>
            <img src={patches} width="60" height="60" />
          </li>
          <li>
            <iframe src={newClip} width="450" height="300" frameBorder="0" />
          </li>
          <div className="inputwrapper">
            <input
              onChange={event => this.handleInput(event)}
              placeholder="Enter new name"
            />
            {/* <p>{this.state.userInput}</p> */}
            <button onClick={() => this.updateHandler(elem.flight_number)}>
              Update Mission Name
            </button>
          </div>
          <button
            onClick={() => this.deleteHandler(elem.flight_number)}
            className="watchbutton"
          >
            Delete From List
          </button>
        </ul>
      );
    });
    return (
      <div>
        <p id="spacex">Watch List</p>
        <div className="mainlist">{myViewList}</div>
        <Footer />
      </div>
    );
  }
}

export default ViewList;
