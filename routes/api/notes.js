const nt = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../../helpers/fsUtils');
const uuid = require('../../helpers/uuid');
const noteData = require('../../db/notes.json');
const { json } = require('express');

//GET route for retrieving all notes 
nt.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);

  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});
//GET route for deleting notes 
nt.delete('/:id', (req, res) => {
  console.log('delete route called ')
  // loop through notes.json and find a note with id that is equal to req.params.id
  const requestedId = req.params.id.toLocaleLowerCase();
  //Iterate through the notes to find what id matches the `req.params.term`
  for (let i = 0; i < noteData.length; i++) {
    if (requestedId === noteData[i].id.toLocaleLowerCase()) {
      noteData.splice(i, 1);
    } 
  } 
  writeToFile('./db/notes.json', noteData);
  
  const response ={ 
    status: 'note deleted',
  };

  res.json(response);

});

//POST route for submitting feedback 
nt.post('/', (req, res) => {
  //log that a post request was received 
  console.info(`${req.method} request received to submit a note`);

  //Destructuring assignemnt for the irtems in req.body 
  console.log(req.body);
  const { title, text } = req.body;

  console.log(title);
  //If all the required properties are present 
  if (title && text ) {
    const newNote = {
      title, 
      text,
      id: uuid(),
    };

    readAndAppend(newNote, './db/notes.json');

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

  