const express = require('express');
const multer = require('multer');
const slugify = require('slugify');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
const route = express.Router();
const userController = require('../controllers/user.controller')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../backend/uploads/profile/icons'); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + slugify(file.originalname)); 
    },
});
  
const upload = multer({ storage });

route.post("/register", upload.single('image'), userController.register);

route.post("/login",jsonParser, userController.login);


module.exports = route