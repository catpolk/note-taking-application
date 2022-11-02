const nt = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

//GET route for retrieving all notes 
nt.get('/', (req, res) => {
    console.info(`${req.method} request received for feedback`);

    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });

  
  