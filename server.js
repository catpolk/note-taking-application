const express = require('express');

const notesApiRoutes = require('./routes/api/notes')
const notesRoutes = require('./routes/notes')

const PORT = 3001; 

//creating a new express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/notes', notesApiRoutes);
app.use('/notes', notesRoutes);

//middleware sends statis resourese that are in public folder
app.use(express.static('public'));

//starts the servese and run the port.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
