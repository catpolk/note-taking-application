const express = require('express');
const path = require('path');
const notes = require('./routes/index')

const PORT = 3001; 

//creating a new express app
const app = express();
app.use(express.urlencoded({ extended: true}));
app.use('/notes', notes);
//middleware sends statis resourese that are in public folder
app.use(express.static('public'));

//GET route for homepage
app.get('/', (req, res) => 
 res.sendFile(path.join(__dirname, 'public/index.html'))
);
//GET route for notes page
app.get('/notes', (req, res) => 
 res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// //GET api request for notes 
// app.get('/api/notes', (req, res) => {
//   res.status(200).json(notes);
// });

// //POST request 
// app.post('api/notes', (req, res) => {
//   //let the client know that their post received
//   console.info(`${req.method} request received to add a note`);

//   //Destructuring assignment for the items in req.body
//   const { title, noteText } = req.body;
//     // If all the required properties are present
//   if (title && noteText) {
//     const newNote = {
//       title, 
//       noteText
//     };

//     const responce = {
//       status: 'success',
//       body: newNote,
//     };

//     console.log(response);
//     res.status(201).json(responce);
//   } else {
//     res.status(500).json('Error in posting a note');
//   }
// });


//starts the servese and run the port.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);



