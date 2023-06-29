const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'joBfindeR1234';

const deletePostulation = async (req, res, next) => {
    var id = req.body.id;
    db.query("update postulation set status = 4 WHERE id= ?",
    [id],(error, results) => {
        if(error) res.status(400).send('Error al eliminar postulacion');
        res.status(200).send(results);
    });
}



const getPostulations = async (req, res, next) => {
    var id = req.body.userid;
    db.query("SELECT * FROM postulation INNER JOIN offer ON postulation.offer_id = offer.ID  WHERE postulation.user_id = ?",
    [id],(error, results) => {
        if(error) res.status(400).send('Error al obtener postulaciones');
        res.status(200).send(results);
    });
}

const create = async (req, res, next) => {
    try{
        db.query("INSERT INTO postulation (user_id,offer_id,status) VALUES (?, ?, ?) ",
            [req.body.userId,req.body.offerId,req.body.status],(error, results) => {
                if (error){
                    res.status(500).send('Error del servidor');
                }
                res.status(200).send({msg:"exito al postular"});
            });
    }catch{
        res.status(500).send('Error del servidor');
    }
}

module.exports = {
    create,
    getPostulations,
    deletePostulation
}