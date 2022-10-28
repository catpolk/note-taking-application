const express = require("express");
const path = require("path");
//creating a new express app
const app = express();
const PORT = 3001; 

app.use(express.static("public"));


