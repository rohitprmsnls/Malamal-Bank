// Importing express module
const express = require('express');
const authRouter = require('./routes/auth');
const connection = require('./storage/db')
const app = express();
// app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('malamal bank');
});
app.use('/auth',authRouter);

app.listen(3000, async() => {
    await connection;
    console.log("connected with db")
  console.log('Our express server is up on port http://localhost:3000');
});
