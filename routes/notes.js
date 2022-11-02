const nt = require('express').Router();
const { readFromFile, readAndAppend } = require('')

//GET api request for notes 
app.get('/api/notes', (req, res) => {
    res.status(200).json(notes);
  });
  
  //POST request 
  app.post('api/notes', (req, res) => {
    //let the client know that their post received
    console.info(`${req.method} request received to add a note`);
  
    //Destructuring assignment for the items in req.body
    const { title, noteText } = req.body;
      // If all the required properties are present
    if (title && noteText) {
      const newNote = {
        title, 
        noteText
      };
  
      const responce = {
        status: 'success',
        body: newNote,
      };
  
      console.log(response);
      res.status(201).json(responce);
    } else {
      res.status(500).json('Error in posting a note');
    }
  });
  