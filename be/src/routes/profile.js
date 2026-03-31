const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const firstName = 'Mina';
  const lastName = 'Gerges';
  const email = 'minagerge4@gmail.com';
  const imageUrl = 'https://plus.unsplash.com/premium_photo-1667480556783-119d25e19d6e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const fullName = `${firstName} ${lastName}`;

  res.send({ lastName, email, imageUrl, fullName });
});

module.exports = router;
