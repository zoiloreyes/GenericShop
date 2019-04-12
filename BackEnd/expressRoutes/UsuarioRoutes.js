var express = require("express");
var app = express();
var UsuarioRoutes = express.Router();
var Usuario = require("../Models/Usuario");


UsuarioRoutes.route('/add').post(function(req, res){
    var usuario = new Usuario(req.body);
        usuario.save()
        .then(usuario => {
            res.status(200).json({'Usuario': "Usuario Añadido correctamente"});

        }).catch(err => {
            res.status(400).send("Unable to save to database");
        })
});

UsuarioRoutes.route("/login").post(function(req, res){
    Usuario.findOne({Correo: req.body.Correo, Contrasena: req.body.Contrasena},function(err, usuario){
      if(err){
        console.log(err);
      }else{
        res.json(usuario)
      }
    })
});

UsuarioRoutes.route('/').get(function (req, res) {
  Usuario.find(function (err, usuarios){
      if(err){
        console.log(err);
      }
      else {
        res.json(usuarios);
      }
    });
  });
  
  // Defined edit route
  UsuarioRoutes.route('/edit/:id').get(function (req, res) {
    var id = req.params.id;
    Usuario.findById(id, function (err, usuario){
        res.json(usuario);
    });
  });
  
  //  Defined update route
  UsuarioRoutes.route('/update/:id').post(function (req, res) {
    Usuario.findById(req.params.id, function(err, usuario) {
      if (!usuario)
        return next(new Error('Could not load Document'));
      else {
        usuario.Nombre = req.body.Nombre;
        usuario.FechadeNacimiento = req.body.FechadeNacimiento;
        usuario.Direccion = req.body.Direccion;
        usuario.Telefono = req.body.Telefono;
        usuario.Cedula = req.body.Cedula;
        usuario.Correo = req.body.Correo;
        usuario.Contrasena = req.body.Contrasena;
  
        usuario.save().then(usuario => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });
  
  // Defined delete | remove | destroy route
  UsuarioRoutes.route('/delete/:id').get(function (req, res) {
    Usuario.findByIdAndRemove({_id: req.params.id}, function(err, usuario){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });

  
  module.exports = UsuarioRoutes;