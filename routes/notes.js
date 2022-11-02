const nt = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

//GET route for retrieving all notes 
nt.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);

    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });

  //POST route for submitting feedback 
  nt.post('/', (req, res) => {
    //log that a post request was received 
    console.info(`${req.method} request received to submit a note`);

    //Destructuring assignemnt for the irtems in req.body 
    const { title, text } =req.body;

    //If all the required properties are present 
    if (title && text ) {
      const newNote = {
        title, 
        text,
        note_id: uuid(),
      };

      readAndAppend(newFeedback, './db/notes.json');

      const response ={ 
        status: 'success',
        body: newNote,
      };

      res.json(response);
    } else {
      res.json('Error in posting a note');
    }
  });

  module.exports  = nt; 

  