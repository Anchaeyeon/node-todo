const express = require('express');
const cors = require('cors');

const todo = require('./routes/todo.js');
const port = 3000;
const app = express();

app.use(cors()); 
app.use(express.json());

app.use('/', todo);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});