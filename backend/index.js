// // Importing express module
const express = require('express');
const connection = require('./storage/db')


const jwt = require('jsonwebtoken');
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

// //logout
// app.post("/logout", async (req, res) => {
//   try {
//     const { token } = req.headers;
//     const user = await User.findOne({ token: token });
//     console.log(user, token);
//     if (user) {
//       user.tokens = [];
//       await user.save();
//       res.status(200).json({ message: "logout successfully" });
//     } else {
//       res.status(400).json({ error: "invalid token" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

app.listen(PORT, async () => {
  try {
    await connection;
    console.log('Application connected to database');
    console.log('App is running on http://localhost:3000');
  } catch {
    console.log('Connection failed');
  }
});
