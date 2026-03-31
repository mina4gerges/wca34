const express = require('express');
const db = require("../database");
const router = express.Router();

router.get('/', async function (req, res) {
  try {
    const { id } = req.user;

    const {firstName, lastName, email, imageUrl} = await db("users")
        .select("firstName", "lastName", "email", "imageUrl")
        .where({id})
        .first();

    const fullName = `${firstName} ${lastName}`;

    res.send({ lastName, email, imageUrl, fullName });
  } catch (error) {
    return res.status(500).send({
      message: `Something went wrong: ${error}`,
    });
}
});

module.exports = router;
