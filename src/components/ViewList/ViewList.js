import React, { Component } from "react";
import axios from "axios";
import "./ViewList.css";

class ViewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewList: []
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

  //   updateHandler(id, info) {
  //     axios.put("/api/updateList").then(response => {
  //       console.log(response);
  //       this.setState({ viewList: response.data });
  //     });
  //   }

  //   updatePersonHandler = (id, name) => {
  //     axios.put(`/api/people/${id}`, { name }).then(response => {
  //       this.setState({ people: response.data, editing: false });
  //     });
  //   };

  render() {
    // console.log(this.state.viewList);
    let myViewList = this.state.viewList.map((elem, ind) => {
      let patches = elem.links.mission_patch_small;
      let clip = elem.links.video_link;
      let newClip = clip.replace("watch?v=", "embed/");
      // let testClip = "https://www.youtube.com/watch?v=0a_00nJ_Y88";
      return (
        <ul key={elem.flight_number} className="launchcard">
          <li>Mission: {elem.mission_name}</li>
          <li>Year: {elem.launch_year}</li>
          <li>
            <img src={patches} width="60" height="60" />
          </li>
          <li>
            <iframe src={newClip} frameBorder="0" />
          </li>
          <button onClick={() => this.deleteHandler(elem.flight_number)}>
            Delete
          </button>
          <button>Update</button>
          {/* <li>{elem.cost_per_launch}</li> */}
        </ul>
      );
    });
    return (
      <div>
        <p>Watch List</p>
        {myViewList}
      </div>
    );
  }
}

export default ViewList;
