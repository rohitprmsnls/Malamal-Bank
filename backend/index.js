// Importing express module
const express = require('express');
const connection = require('./storage/db');
require('dotenv').config();
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
// console.log(email, password);

const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 8080;
const User = require('./modules/User');

const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('malamal bank');
// });
// For login
app.post('/login', async (req, res) => {
  const findUser = await User.find({ acoountnumber: req.body.acoountnumber  });
  if (!findUser.length) return res.status(404).send('Wrong credential entered');
  const token = jwt.sign(
    {
      accountNumber: User.acoountnumber,
      accountPin: User.pinnumber,
    },
    'SECRET'
  );
  return res.send({
    message: 'Login success',
    User,
    token: token,
  });
});

// for signup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});


app.post('/signup', async (req, res) => {
  const findUser = await User.find({ email: req.body.email });
  if (findUser.length) return res.send('User already exist');
  const acountNumber = Math.floor(Math.random() * 10000000000);
  const pinnumber = Math.floor(Math.random() * 10000);
  const user = new User({ ...req.body, acountNumber });

  user.save();
  // let mailDetails;
const mailOptions = {
  from: email,
  to: 'karinakhairnar@gmail.com',
  subject: 'asch',
  text: `User Information Account_Number :- ${acountNumber}, Pin :- ${pinnumber}`,
  accountNumber:`${acountNumber}`,
  account_Pin:`${pinnumber}`
  // accountNumber: 'acoountnumber',
  // accountPin: 'pinnumber',
};
  // return res.status(201).send('Signup success');
  if (res.status(201)) {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.log(error);
      else console.log('Email sent: ' + info.response);
    });
    return res.send({
      message: 'Signup success',
      User,
      acountNumber,
       pinnumber,
    });
  }
});

// geting spesific user
app.get('/', async (req, res) => {
  const userData = await User.find({ data: req.body.email });
  res.send(userData);
});

// b
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

// async function main() {
//   let testAccount = await nodemailer.createTestAccount();

//   let transporter = nodemailer.createTransport({
//     host: "karinakhairnar@gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: testAccount.user,
//       pass: testAccount.pass,
//     },
//   });
//   let info = await transporter.sendMail({
//     from: 'karinakhairnar@gmail.com', // sender address
//     to: "karinakhairnar@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   // console.log("Message sent: %s", info.messageId);
//   // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// main().catch(console.error);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log('Application connected to database');
    console.log('App is running on http://localhost:8080');
  } catch {
    console.log('Connection failed');
  }
});
