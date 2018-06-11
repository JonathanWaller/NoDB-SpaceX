const express = require("express"),
  cors = require("cors"),
  axios = require("axios"),
  bodyParser = require("body-parser"),
  ic = require("./controllers/mainInfo.js");
rc = require("./controllers/rockets.js");
lc = require("./controllers/launches.js");
wc = require("./controllers/weather.js");
vc = require("./controllers/viewList");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/getLaunches", lc.getLaunches);

app.get("/api/getInfo", ic.getInfo);

app.get("/api/getRockets", rc.getRockets);

app.get("/api/getWeather", wc.getWeather);

app.get("/api/getViewList", vc.getViewList);
app.post("/api/addLaunch", vc.addLaunch);
app.delete("/api/deleteLaunch/:id", vc.deleteLaunch);
app.put("/api/updateLaunch/:id", vc.updateLaunch);

// app.put('/api/updateLaunch', vc.)

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listeninggg on ${port}`));
