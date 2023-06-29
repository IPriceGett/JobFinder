const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'joBfindeR1234';


const deleteOffer = async (req, res, next) => {
    var id = req.params.id;
    console.log(req.params.id)
    db.query("DELETE FROM offer WHERE ID = ?",
    [id],(error, results) => {
        if(error) res.status(400).send('Error al obtener ofertas');
        res.status(200).send({"exito":"je"});
    });
}

const getByOwner = async (req, res, next) => {
    var id = req.body.userid;
    db.query("SELECT * FROM user WHERE ID = ?",[id],
    (error, results) => {
        if(error) res.status(400).send('Error al obtener ofertas');
        if (results[0].Role == 1){
            db.query("SELECT * FROM offer",(error, results) => {
                if(error) res.status(400).send('Error al obtener ofertas');
                res.status(200).send(results);
            });
        }else{
            db.query("SELECT * FROM offer WHERE owner = ?",
            [id],(error, results) => {
                if(error) res.status(400).send('Error al obtener ofertas');
                res.status(200).send(results);
            });
        }
    }
    )
}

const getOffer = async (req, res, next) => {
    var id = req.body.id;
    console.log(req.body)
    db.query("SELECT * FROM offer WHERE ID = ?",
    [id],(error, results) => {
        if(error) res.status(400).send('Error al obtener ofertas');
        res.status(200).send(results[0]);
    });
}

const list = async (req, res, next) => {
    var pass = req.body.pass;
    db.query("SELECT * FROM offer",
    [req.body.email],(error, results) => {
        if(error) res.status(400).send('Error al obtener ofertas');
        res.status(200).send(results);
    });
}



const create = async (req, res, next) => {
    // Convertir la cadena de fecha en un objeto Date
    const date = new Date(req.body.expiration);

    // Obtener los componentes de fecha necesarios
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
    const day = date.getDate();

    // Formatear la fecha en el formato YYYY-MM-DD aceptado por MySQL
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    if (req.file) {
        db.query("INSERT into offer (title,description,expiration,type,owner,icon) VALUES (?, ?, ?, ?, ?, ?) ",
            [req.body.title,req.body.desc,formattedDate,req.body.type,req.body.owner,req.file.filename],(error, results) => {
                if (error){
                    console.log(error)
                    res.status(500).send('Error del servidor');
                }
                res.status(200).send({msg:"exito"});
            });
    } else {
        res.status(400).send('Error al registrar');
    }
}

module.exports = {
    create,
    list,
    getOffer,
    getByOwner,
    deleteOffer
}