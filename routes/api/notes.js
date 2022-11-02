const nt = require('express').Router();
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');
const uuid = require('../../helpers/uuid');
const noteData = require('../../db/notes.json');

//GET route for retrieving all notes 
nt.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);

  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

//GET route for retrieving all notes 
nt.delete('/:id', (req, res) => {
  console.log('delete route called ')
  // loop through notes.json and find a note with id that is equal to req.params.id
  const requestedId = req.params.id.toLocaleLowerCase();
  //Iterate through the notes to find what id matches the `req.params.term`
  for (let i = 0; i < noteData.length; i++) {
    if (requestedId === noteData[i].id.toLocaleLowerCase()) {
      return res.json(noteData[i]);
    }
  }

  // readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)[req.params.ind]));
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

  