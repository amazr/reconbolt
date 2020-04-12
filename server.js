  /* App requirements section */
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const session = require('express-session');
const bodyParser= require('body-parser');
const port = process.env.PORT || 80;
  
/* Declare express app */
const app = express();
  
/* App use section */
app.use(bodyParser.urlencoded({extended: true}));
app.use('//', express.static('resources'))

  
/* Sets the view engine to ejs, this is just an html templating thing. */
app.set('view engine', 'ejs');
  
/* App is running on port 3000 */
app.listen(port, () => {
    console.log("Server running on port 8080");
});