const express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
const userRouter = require('../Backend/routers/user.router')
const offerRouter = require('../Backend/routers/offer.router')
const postulationRouter = require('../Backend/routers/postulation.router')
const PORT = 5000;

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json({limit: '50mb'}));

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static('uploads'));

app.use('/user',userRouter);

app.use('/offer',offerRouter);

app.use('/postulation',postulationRouter);

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});