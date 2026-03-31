const jwt = require("jsonwebtoken");
const express = require('express');
const {JWT_SECRET} = require("../config");
const router = express.Router();

const db = require("../database");

router.post('/login', async function (req, res) {
  try {
    const {email, password} = req.body;

    if (!email || !password) {
      return res.status(400).send({
        status: 'error',
        message: "Email and password are required",
      });
    }

    const user = await db("users")
        .select("id", "password")
        .where({ email })
        .first();

    if (!user) {
      return res.status(401).send({
        message: "Invalid email or password",
      });
    }

    // in real world example we should use bcrypt
    const isPasswordValid = await password === user.password;

    if (!isPasswordValid) {
      return res.status(401).send({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
        { id: user.id },
        JWT_SECRET,
        { expiresIn: "7d" }
    );

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.send({ status: 'success' });
  } catch (error) {
    return res.status(500).send({
      message: `Something went wrong: ${error}`,
    });
  }
});

module.exports = router;
