const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')



// create express app
const app = express();


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

config = require("./config/DB");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(config.DB, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

const itemRoutes = require('./expressRoutes/itemRoutes');
const UsuarioRoutes = require("./expressRoutes/UsuarioRoutes");
const LibroRoutes = require("./expressRoutes/LibroRoutes");
const CategoriaRoutes = require("./expressRoutes/CategoriasRoutes");
app.use("/items", itemRoutes);
app.use("/usuarios", UsuarioRoutes);
app.use("/libros", LibroRoutes);
app.use("/categorias", CategoriaRoutes)
// listen for requests
app.listen(4242, () => {
    console.log("Server is listening on port 4242");
});