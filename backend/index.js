// Importing express module
const express = require('express');
const connection = require('./storage/db');
require('dotenv').config();
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
console.log(email, password);

const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 3000;
const User = require('./modules/User');

const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('malamal bank');
});
// For login
app.post('/login', async (req, res) => {
  if (!User.length) return res.status(404).send('Wrong credential entered');
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
let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    type: 'EAUTH',
    user: 'karinakhairnar@gmail.com',
    pass: password,
    code: 'EAUTH',
    command: 'AUTH PLAIN',
  },
  // tls:{
  //   rejectUnauthorized:false
  // }
});
const acoountnumber = Math.floor(Math.random() * 10000000000);
const pinnumber = Math.floor(Math.random() * 10000);
// let mailDetails;

app.post('/signup', async (req, res) => {
  const findUser = await User.find({ email: req.body.email });
  if (findUser.length) return res.send('User already exist');
  const user = new User(req.body);
  user.save();
  // return res.status(201).send('Signup success');
  if (res.status(201)) {
    return res.send({
      message: 'Signup success',
      User,
      accountNumber: acoountnumber,
      accountPin: pinnumber,
    });
  }
});
mailDetails = {
  from: 'karinakhairnar@gmail.com',
  to: 'dipak943mali@gmail.com',
  subject: 'Test mail',
  Text: 'gmail sent',
};
mailTransporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log(err,"error occur");
  } else {
    console.log('Email sent successfully');
  }
});
// get user
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
    console.log('App is running on http://localhost:3000');
  } catch {
    console.log('Connection failed');
  }
});
