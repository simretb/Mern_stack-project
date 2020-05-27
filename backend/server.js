const express = require('express');
const cors = require('cors');


const mongoose = require('mongoose');


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());



mongoose.connect('mongodb://127.0.0.1:27017/mernexe', {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});
const excercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users')

app.use('/exercises', excercisesRouter);
app.use('/users', usersRouter);

app.listen(PORT, function(){
  console.log("Server is running on port:" + 5000);
});
