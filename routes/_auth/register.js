const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = require('../../config/jwtConfig').secret;
const User = require('../../models/User');

router.post('/', (req, res, next) => {
  const { email, password } = req.body;

  if (typeof email !== 'string' || typeof password !== 'string') {

    return res.json({ message: 'wrong-credentials' });

  }

  User.findOne({ email: email }, (err, user) => {

    if (err) return res.json({ message: 'error' });

    else if (user) return res.json({ message: 'email-is-taken' });

    else {
      const hashedPassword = bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {

          User.create({
            email: email,
            password: hash
          }, (err, user) => {

            if (err) return res.json({ message: 'error' });

            const token = jwt.sign(
              { id: user._id },
              jwtSecret,
              { expiresIn: 86400 }
            );

            return res.json({
              message: 'success',
              idToken: token
            });

          });

        });
      });
    }

  });
});

module.exports = router;
