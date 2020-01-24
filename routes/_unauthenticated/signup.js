const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = require('../../config/jwtConfig').secret;
const User = require('../../models/User');

router.post('/', (req, res, next) => {
  const { email, password } = req.body;

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.json({
      message: 'wrong credentials'
    });
  }

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        const hashedPassword = bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {

            User.create({
              email: email,
              password: hash
            })
              .then(user => {
                const token = jwt.sign(
                  { id: user._id },
                  jwtSecret,
                  { expiresIn: 86400 }
                );
                return res.json({
                  auth: true,
                  idToken: token
                });
              });

          });
        });
      }
      else {
        return res.json({
          message: 'this email is taken'
        });
      }
    });
});

module.exports = router;
