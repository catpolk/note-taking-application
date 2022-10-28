const express = require('express');
const path = require('path');
//fs module
const fs = require('fs');
//creating a new express app
const app = express();
const PORT = 3001; 

app.use(express.static('public'));

//GET route to get all the 
app.get('/api/db', (req, res) => res.json(dbData));






// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);