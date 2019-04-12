var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Libro = new Schema({
    Titulo: {
        type: String 
    },
    Genero:{
        type: String
    },
    Autor:{
        type: String
    },
    Precio:{
        type: Number
    },
    ISBN:{
        type: String
    }
}, {
    collection: 'Libros'
});

module.exports = mongoose.model("Libro", Libro);