const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../../models/User');
const sendIdToken = require('./functions/sendIdToken');

function regexVerifyEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function regexVerifyPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/;
  //const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,30})/;
  return regex.test(password);
}

router.post('/', (req, res, next) => {
  const { email, password } = req.body;

  if (!regexVerifyEmail(email) || !regexVerifyPassword(password)) {
    return res.json({ message: 'Wrong credentials' });
  }

  User.findOne({ email: email }, (err, user) => {

    if (err) return res.json({ message: 'An error occurred' });

    else if (user) return res.json({ message: 'This email is taken' });

    else {
      const hashedPassword = bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          User.create({
            email: email,
            password: hash
          }, (err, user) => {
            if (err) return res.json({ message: 'An error occurred' });

            return sendIdToken(user, res);
          });
        });
      });
    }

  });
});

module.exports = router;
