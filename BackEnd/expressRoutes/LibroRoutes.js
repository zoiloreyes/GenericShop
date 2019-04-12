var express = require("express");
var app = express();
var libroRoutes = express.Router();
var Libro = require("../Models/Libro");


libroRoutes.route('/add').post(function(req, res){
  var libro = new Libro(req.body);
        libro.save()
        .then(item => {
            res.status(200).json({'item': "Item Añadido correctamente"});

        }).catch(err => {
            res.status(400).send("Unable to save to database");
        })
});

libroRoutes.route("/details/:id").post(function(req, res){
  Libro.findOne({_id: req.params.id},function(err, libro){
    if(err){
      console.log(err);
    }else{
      res.json(libro)
    }
  })
});

libroRoutes.route('/').get(function (req, res) {
  Libro.find(function (err, items){
      if(err){
        console.log(err);
      }
      else {
        res.json(items);
      }
    });
  });
  
  // Defined edit route
  libroRoutes.route('/edit/:id').get(function (req, res) {
    var id = req.params.id;
    Libro.findById(id, function (err, item){
        res.json(item);
    });
  });
  
  //  Defined update route
  libroRoutes.route('/update/:id').post(function (req, res) {
    Libro.findById(req.params.id, function(err, item) {
      if (!item)
        return next(new Error('Could not load Document'));
      else {
        item.Titulo = req.body.Titulo;
        item.Cantidad = req.body.Cantidad;
        item.Genero = req.body.Genero;
        item.Autor = req.body.Autor;
        item.Precio = req.body.Precio;
        item.ISBN = req.body.ISBN;
        item.Portada = req.body.Portada;
  
        item.save().then(item => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });
  
  // Defined delete | remove | destroy route
  libroRoutes.route('/delete/:id').get(function (req, res) {
    Libro.findByIdAndRemove({_id: req.params.id}, function(err, item){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });

  
  module.exports = libroRoutes;                                                                                                                      