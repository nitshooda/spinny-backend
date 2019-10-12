//import dotenv from "dotenv";
const express = require("express");
const app = express();

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const router = require("./src/routes/route");
app.use("/", jsonParser, router);

// initialize configuration

const port = process.env.PORT || 8080;

// define a route handler for the default home page
// app.get( "/", ( req, res ) => {
//     res.send( "Hello world!" );
// } );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );