const express = require('express');
path = require("path");
bodyParser = require('body-parser');
cors = require('cors');
mongoose = require('mongoose');
config = require("./config/DB");

const itemRoutes = require('./expressRoutes/itemRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log("Database connected")},
    err => {console.log("Can't connect to the database" + error)}
);

const  app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use("/items", itemRoutes);

var port = process.env.PORT || 8081;

var server = app.listen(port,() =>{
    console.log("Listening on port " + port);
<<<<<<< HEAD
});
=======
}); 

>>>>>>> f699ff0fed6b8c0779c8c19b950376b44f0c4ded
