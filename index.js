// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const ejs = require('ejs');
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  
  res.render('home');
});

app.get('/greetings/:name', (req, res) => {
  // grab the name from the path provided
  const name = req.params.name;
  // render the greetings view, passing along the name
  res.render('greetings', { name });
});

// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});