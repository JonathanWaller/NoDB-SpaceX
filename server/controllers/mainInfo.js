const axios = require("axios");

let info = [];

module.exports = {
  getInfo(req, res) {
    res.status(200).json(info);
  }
};

axios.get("https://api.spacexdata.com/v2/info").then(response => {
  // console.log(response);
  info = response.data;
});

// const getInfo = (req, res) => {
//   axios.get("https://api.spacexdata.com/v2/info").then(response => {
//     console.log(response.data);
//     res.status(200).json(response.data);
//   });
// };

// module.exports = {
//   getInfo
// };
