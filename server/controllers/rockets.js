const axios = require("axios");

let rockets = [];

module.exports = {
  getRockets(req, res) {
    res.status(200).json(rockets);
  }
};

axios.get("https://api.spacexdata.com/v2/rockets").then(response => {
  rockets = response.data;
});

// const getRockets = (req, res, next) => {
//   axios.get("https://api.spacexdata.com/v2/rockets").then(response => {
//     console.log(response);
//     res.status(200).json(response.data);
//   });
// };

// module.export = {
//   getRockets
// };
