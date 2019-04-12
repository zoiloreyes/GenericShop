var express = require("express");
var app = express();
var categoriaRoutes = express.Router();
var Libro = require("../Models/Libro");


categoriaRoutes.route('/').get(function (req, res) {
  Libro.distinct("Genero",(err, items) => {
    if(err){
        console.log(err);
      }
      else {
        res.json(items);
      }
  })
});
  
  module.exports = categoriaRoutes;                                                                                                                      