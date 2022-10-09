// // Importing express module
// const express = require('express');
// const connection = require('./storage/db');

// const jwt = require('jsonwebtoken');
// const PORT = process.env.PORT || 3000;
// const User = require('./modules/User');

// const nodemailer = require('nodemailer');
// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('malamal bank');
// });
// // For login
// app.post('/login', async (req, res) => {
//   if (!User.length) return res.status(404).send('Wrong credential entered');
//   const token = jwt.sign(
//     {
//       accountNumber: User.acoountnumber,
//       accountPin: User.pinnumber,
//     },
//     'SECRET'
//   );
//   return res.send({
//     message: 'Login success',
//     User,
//     token: token,
//   });
// });

// // for signup
// let mailTransporter = nodemailer.createTransport({
//   service: 'gmail',
//   host: 'smtp.ethereal.email',
//   port: 587,
//   secure: false,
//   auth: {
//     type: 'EAUTH',
//     user: 'karinakhairnar@gmail.com',
//     pass: 'karu@842003',
//     code: 'EAUTH',
//     command: 'AUTH PLAIN',
//   },
//   // tls:{
//   //   rejectUnauthorized:false
//   // }
// });
// const acoountnumber = Math.floor(Math.random() * 10000000000);
// const pinnumber = Math.floor(Math.random() * 10000);
// // let mailDetails;

// app.post('/signup', async (req, res) => {
//   const findUser = await User.find({ email: req.body.email });
//   if (findUser.length) return res.send('User already exist');
//   const user = new User(req.body);
//   user.save();
//   // return res.status(201).send('Signup success');
//   if (res.status(201)) {
//     return res.send({
//       message: 'Signup success',
//       User,
//       accountNumber: acoountnumber,
//       accountPin: pinnumber,
//     });
//   }
// });
// mailDetails = {
//   from: 'karinakhairnar@gmail.com',
//   to: 'dipak943mali@gmail.com',
//   subject: 'Test mail',
//   Text: 'gmail sent',
// };
// mailTransporter.sendMail(mailDetails, function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Email sent successfully');
//   }
// });
// // get user
// // b
// // //logout
// // app.post("/logout", async (req, res) => {
// //   try {
// //     const { token } = req.headers;
// //     const user = await User.findOne({ token: token });
// //     console.log(user, token);
// //     if (user) {
// //       user.tokens = [];
// //       await user.save();
// //       res.status(200).json({ message: "logout successfully" });
// //     } else {
// //       res.status(400).json({ error: "invalid token" });
// //     }
// //   } catch (err) {
// //     console.log(err);
// //   }
// // });

// // async function main() {
// //   let testAccount = await nodemailer.createTestAccount();

// //   let transporter = nodemailer.createTransport({
// //     host: "karinakhairnar@gmail.com",
// //     port: 587,
// //     secure: false,
// //     auth: {
// //       user: testAccount.user,
// //       pass: testAccount.pass,
// //     },
// //   });
// //   let info = await transporter.sendMail({
// //     from: 'karinakhairnar@gmail.com', // sender address
// //     to: "karinakhairnar@gmail.com", // list of receivers
// //     subject: "Hello ✔", // Subject line
// //     text: "Hello world?", // plain text body
// //     html: "<b>Hello world?</b>", // html body
// //   });

// //   // console.log("Message sent: %s", info.messageId);
// //   // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// // }

// // main().catch(console.error);
// app.listen(PORT, async () => {
//   try {
//     await connection;
//     console.log('Application connected to database');
//     console.log('App is running on http://localhost:3000');
//   } catch {
//     console.log('Connection failed');
//   }
// });

"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'karinakhairnar@gmail.com', // generated ethereal user
      pass: 'karu@842003', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'karinakhairnar@gmail.com', // sender address
    to: "abhishekdewangan06@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

