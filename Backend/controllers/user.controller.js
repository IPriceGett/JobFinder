const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;


const login = async (req, res, next) => {
    var pass = req.body.pass;
    db.query("SELECT * FROM user WHERE email = ?",
    [req.body.email],(error, results) => {
        console.log(pass)
        console.log(results[0])
        bcrypt.compare(pass, results[0].Pass, (err, result) => {
            if (err) {
              console.error('Error al comparar las contraseñas:', err);
              return;
            }
            if (result) {
                res.status(200).send({"token":jwt.sign({username: results[0].Email, name: results[0].Name, icon: results[0].Icon}, secretKey),id:results[0].ID, email: results[0].Email, name: results[0].Name, icon: results[0].Icon});
            } else {
              console.log('Las contraseñas no coinciden');
            }
          });
    });
}



const register = async (req, res, next) => {
    var pass = req.body.pass;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(pass, salt, (err, hash) => {
            if (err) res.status(400).send('Error al registrar');
          
            if (req.file) {
                db.query("SELECT * FROM user WHERE email = ?",[req.body.email],(error, users)=>{
                    if (users.length == 0){
                        db.query("INSERT into user (name,phone,email,pass,ocupation,organization,role,icon) VALUES (?, ?, ?, ?, ?, ?, 2, ?) ",
                        [req.body.name,req.body.phone,req.body.email,hash,req.body.ocupation,req.body.organization,req.file.filename],(error, fake) => {
                            if (error) res.status(500).send('Error del servidor');
                            db.query("SELECT * FROM user WHERE email = ?",[req.body.email],(error, results)=>{
                                res.status(200).send({"token":jwt.sign({username: req.body.email, name: req.body.name, icon: req.file.filename}, secretKey),id:results[0].ID, email: req.body.email, name: req.body.name, icon: req.file.filename});
                            })
                        });
                    }
                    else res.status(400).send('Error al registrar, usuario usado');
                })
            } else {
                res.status(400).send('Error al registrar');
            }
        });
      });
}

module.exports = {
    register,
    login
}