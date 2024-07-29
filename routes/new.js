const express = require("express");
const router = express.Router();
const messages = require("../db/messages");

router.get("/", (req, res) => {
  res.render("new");
});

router.post("/", (req, res) => {
  const messageText = req.body.text;
  const user = req.body.name;

  const newMessage = {
    id: messages.length + 1,
    text: messageText,
    user: user,
    added: new Date(),
  };

  messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;
