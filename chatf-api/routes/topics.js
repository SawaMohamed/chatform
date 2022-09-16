var express = require("express");
var router = express.Router();
const Topics = require("../schemas/topics.schema copy 2");

/* GET users listing. */
router.get("/", async function (req, res, next) {
    const {section} = req.body;
  const topics = await Topics.find({
    section
  });
  res.send(topics);
});
router.post("/", async function (req, res, next) {
  const { title, text, section, member } = req.body;
  const newTopic = await Topics.create({
    title,
    text,
    section,
    member,
    createdAt: new Date(),
  });
  res.send(newTopic);
});
router.put("/", async function (req, res) {
  const { title, text, _id } = req.body;
  const updateTopic = await Topics.findByIdAndUpdate(
    {
      title,
      text,
      _id,
      createdAt: new Date(),
    },
    { new: true }
  );
  res.send(updateTopic);
});

router.delete("/", async function (req, res) {
  const { _id } = req.body;
  const deleteTopic = await Topics.findByIdAndUpdate(
    _id,
    {
      isvisible: false,
    },
    { new: true }
  );
  res.send(deleteTopic);
});
module.exports = router;
