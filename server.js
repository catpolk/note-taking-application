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



//starts the servese and run the port.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);



