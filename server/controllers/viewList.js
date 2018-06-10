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
  console.log(viewList);
  let indexOfLaunch = viewList.findIndex(
    launch => launch.flight_number == req.params.id
    // viewList => viewList.id == req.params.id
  );
  viewList.splice(indexOfLaunch, 1);
  res.status(200).json(viewList);
};

// const updateLaunch = (req,res,next)=>{}

// const updatePerson = (req, res, next) => {
//   const { name } = req.body;
//   const { id } = req.params;

//   let indexOfPerson = people.findIndex(person => person.id == id);
//   people[indexOfPerson].name = name;

//   res.status(200).send(people);
// };

module.exports = {
  getViewList,
  addLaunch,
  deleteLaunch
};
