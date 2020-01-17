//Imports
const constantsFile = require("./constants");
const routes = require("./routes");

const express = require("express");     //Import ExpressJs module
const mongoose = require("mongoose");   //DB Connection
const cors = require("cors");

//Create a new express aplication
const app = express();
//Port to comunicate 
const port = 3333;

mongoose.connect(constantsFile.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Da acesso apenas ao seguinte
app.use(cors({ origin: "http://localhost:3000" }))
//Define a rule to be used in the aplication
app.use(express.json());
//Use the routes in the other file
app.use(routes);

//Listening port
app.listen(port);