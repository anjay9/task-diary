const express = require('express');
const jwt = require('jsonwebtoken');

const jwtSecret = require('../../../config/jwtConfig').secret;

function sendIdToken(user, res) {
  const idToken = jwt.sign(
    { id: user._id },
    jwtSecret
  );

  res.json({ message: 'success', idToken });
}

module.exports = sendIdToken;
