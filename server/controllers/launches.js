const axios = require("axios");

let launches = [];

axios.get("https://api.spacexdata.com/v2/launches").then(response => {
  // console.log(response.data);
  launches = response.data;
});

const getLaunches = (req, res) => {
  res.status(200).json(launches);
};

const getFilteredLaunches = (req, res, next) => {
  const { filter } = req.query;
  let filteredLaunches = launches.filter(launch =>
    launch.launch_year.includes(filter)
  );
  res.status(200).json(filteredLaunches);
};

module.exports = {
  getLaunches
};
