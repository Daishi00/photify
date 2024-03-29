const bcrypt = require("bcrypt");
const { User } = require("../models/User");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ name: req.body.name });
  if (!user)
    return res
      .status(400)
      .send(
        "Incorrect email address and / or password. Correct the data and try again."
      );

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res
      .status(400)
      .send(
        "Incorrect email address and / or password. Correct the data and try again."
      );

  const token = user.generateAuthToken();
  res.send(token);
});

function validate(req) {
  const schema = {
    name: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(5).max(255).required(),
  };
  return Joi.validate(req, schema);
}

module.exports = router;
