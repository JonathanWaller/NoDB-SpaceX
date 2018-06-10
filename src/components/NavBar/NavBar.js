import React, { Component } from "react";
import "./NavBar.css";

// class NavBar extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {};
//   }

//   render(props) {
//     return (
//       <div>
//         <ul className="navbar">
//           <li onClick={() => props.home()} className="link">
//             Home
//           </li>
//           <li onClick={() => props.launches()} className="link">
//             Launches
//           </li>
//           <li className="link">Watch List</li>
//         </ul>
//       </div>
//     );
//   }
// }

const NavBar = props => {
  return (
    <div>
      <ul className="navbar">
        <li onClick={() => props.home()} className="link">
          Home
        </li>
        <li onClick={() => props.launches()} className="link">
          Launches
        </li>
        <li onClick={() => props.watch()} className="link">
          Watch List
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
