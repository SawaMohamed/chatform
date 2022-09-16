var express = require("express");
var router = express.Router();
const Comments = require("../schemas/comments.schema");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const {topic} = req.body;
  const comments = await Comments.find({
    topic
  });
  res.send(comments);
});
router.post("/", async function (req, res, next) {
  const { text, topic, member } = req.body;
  const newComment = await Comments.create({
    text,
    topic,
    member,
    createdAt: new Date(),
  });
  res.send(newComment);
});
router.put("/", async function (req, res) {
  const { text, _id } = req.body;
  const newComment = await Comments.findByIdAndUpdate(
    _id,
    {
      text,
      _id,
    },
    { new: true }
  );
  res.send(newComment);
});

router.delete("/", async function (req, res) {
  const { _id } = req.body;
  const newComment = await Comments.findByIdAndUpdate(
    _id,
    {
      isvisible: false,
    },
    { new: true }
  );
  res.send(newComment);
});
module.exports = router;
