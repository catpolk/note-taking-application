const app = require('express').Router();
const path = require('path');

//GET route for retrieving all notes 
//GET route for notes page
app.get('/', (req, res) => 
 res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports  = app; 

  