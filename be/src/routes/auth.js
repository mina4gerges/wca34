const express = require('express');
const router = express.Router();

router.post('/login', function(req, res) {
  const { email, password } = req.body;

  if(email !== 'test@gmail.com' && password !== 'test') {
    res.send({ status: 'error', message: 'Invalid email or password' });
  }

  res.send({ status: 'success' });
});

module.exports = router;
