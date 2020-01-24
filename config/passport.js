const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtSecret = require('./jwtConfig').secret;
const User = require('../models/User');

module.exports = function (passport) {

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use(
    new LocalStrategy(
      { usernameField: 'email' },
      (passedEmail, passedPassword, done) => {
        User.findOne({ email: passedEmail })
          .then(user => {
            if (!user) {
              return done(null, false, { message: 'That email is not registered' });
            }
            bcrypt.compare(passedPassword, user.password, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                return done(null, user);
              }
              else {
                return done(null, false, { message: 'Password incorrect' });
              }
            });
          });
      }
    )
  );

  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        // NOTE: Generate a new secret for every project online.
        secretOrKey: jwtSecret // '4u7x!A%D*G-KaPdSgVkYp3s6v8y/B?E('
      },
      (payload, done) => {
        User.findOne({ _id: payload.id }, (err, user) => {
          if (err) return done(err, false);
          if (!user) return done(null, false);
          return done(null, user);
        });
      }
    )
  );

};
