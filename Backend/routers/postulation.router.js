const express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
const route = express.Router();
const postulationController = require('../controllers/postulation.controller')

route.post("/create",jsonParser, postulationController.create);

route.put("/delete",jsonParser, postulationController.deletePostulation);

route.post("/getPostulations",jsonParser, postulationController.getPostulations);

module.exports = route