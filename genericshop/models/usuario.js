var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Usuario = new Schema({ 
Nombre: {

    type: String 

},

FechadeNacimiento: {
    type: Date
},

Direccion: {

    type: String
},

Cedula: {

    type: String
},

Telefono: {

    type: Number
    
},

Correo: 
{
    type: String
},

Contrasena: {

    type: String
},

}, {
    collection: 'Usuarios'
});

module.exports = mongoose.model("Usuario", Usuario);