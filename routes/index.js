const express = require('express');

//a new module fpor end point 
const noteRouter = require('./notes')

const app = express();
app.use('/notes', noteRouter);

module.exports =app;