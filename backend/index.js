// // Importing express module
const express = require('express');
const authRouter = require('./routes/auth');
const connection = require('./storage/db')
// const app = express();
// // app.use(express.urlencoded({extended:true}));
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('malamal bank');
// });
// app.use('/auth',authRouter);

// app.listen(8080, async() => {
//     await connection;
//     console.log("connected with db")
//   console.log('Our express server is up on port http://localhost:8080');
// });

// const express = require('express');
// const cors = require('cors');
// const connection = require('./db');
const jwt = require('jsonwebtoken');
// const StudentModel = require('./models/StudnetModel');
// const TestModel = require('./models/TestModel');
// app.use(cors());
const PORT = process.env.PORT || 3000;
const User = require('./modules/User');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('malamal bank');
});

// for signup
app.post('/signup', async (req, res) => {
  const findUser = await User.find({ email: req.body.email });
  if (findUser.length) return res.send('User already exist');
  const user = new User(req.body);
  user.save();
  res.status(201).send('Signup success');
});

// // For login
app.post('/login', async (req, res) => {
  if (!User.length) return res.status(404).send('Wrong credential entered');
  const token = jwt.sign(
    {
      email: User.email,
      password: User.password,
    },
    'SECRET'
  );
  return res.send({
    message: 'Login success',
    User,
    token: token,
  });
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log('Application connected to database');
    console.log('App is running on http://localhost:3000');
  } catch {
    console.log('Connection failed');
  }
});
