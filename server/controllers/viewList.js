const axios = require("axios");

const viewList = [];

const getViewList = (req, res, next) => {
  // console.log(viewList);
  res.status(200).json(viewList);
};

const addLaunch = (req, res, next) => {
  // console.log(req.body);
  viewList.push(req.body);
  res.status(200).json(viewList);
};

const deleteLaunch = (req, res, next) => {
  // console.log(viewList);
  let indexOfLaunch = viewList.findIndex(
    launch => launch.flight_number == req.params.id
    // viewList => viewList.id == req.params.id
  );
  viewList.splice(indexOfLaunch, 1);
  res.status(200).json(viewList);
};

const updateLaunch = (req, res, next) => {
  let updateId = req.params.id;
  console.log(req.body);
  viewList.forEach(
    launch =>
      launch.flight_number == updateId ? Object.assign(launch, req.body) : null
  );
  return res.status(200).json(viewList);
};

module.exports = {
  getViewList,
  addLaunch,
  deleteLaunch,
  updateLaunch
};
