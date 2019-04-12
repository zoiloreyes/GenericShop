var express = require("express");
var app = express();
var libroRoutes = express.Router();
var Libro = require("../models/Libro");


libroRoutes.route('/add').post(function(req, res){
  var libro = new Libro(req.body);
        libro.save()
        .then(libro => {
            res.status(200).json({'libro': "Libro Añadido correctamente"});

        }).catch(err => {
            res.status(400).send("Unable to save to database");
        })
});

libroRoutes.route('/').get(function (req, res) {
    Libro.find(function (err, libro){
      if(err){
        console.log(err);
      }
      else {
        res.json(libro);
      }
    });
  });
  
  // Defined edit route
  libroRoutes.route('/edit/:id').get(function (req, res) {
    var id = req.params.id;
    Libro.findById(id, function (err, libro){
        res.json(libro);
    });
  });
  
  //  Defined update route
  libroRoutes.route('/update/:id').post(function (req, res) {
    Libro.findById(req.params.id, function(err, libro) {
      if (!libro)
        return next(new Error('Could not load Document'));
      else {
        libro.name = req.body.name;
        libro.price = req.body.price;
  
        libro.save().then(libro => {
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
    Libro.findByIdAndRemove({_id: req.params.id}, function(err, libro){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });

  
  module.exports = itemRoutes;                                                                                                                    