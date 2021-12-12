const auth = require("../middleware/isAuth");

const express = require('express');
const router = express.Router();

router.post("/welcome", auth.isAuth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = router;