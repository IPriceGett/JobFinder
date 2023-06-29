const express = require('express');
const multer = require('multer');
const slugify = require('slugify');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
const route = express.Router();
const offerController = require('../controllers/offer.controller')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../backend/uploads/offer/icons'); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + slugify(file.originalname)); 
    },
});
  
const upload = multer({ storage });

route.post("/create", upload.single('image'), offerController.create);

route.get("/list",jsonParser, offerController.list);

route.post("/byOwner",jsonParser, offerController.getByOwner);

route.post("/offer",jsonParser, offerController.getOffer);

route.delete("/delete/:id",jsonParser, offerController.deleteOffer);


module.exports = route