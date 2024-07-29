const express = require("express");
const router = express.Router();
const messages = require("../db/messages");

router.get("/:id", (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  const message = messages.find((msg) => msg.id === messageId);

  if (message) {
    res.render("message", { message: message });
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = router;
