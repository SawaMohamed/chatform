var express = require("express");
const Sections = require("../schemas/sections.schema copy 2");
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
  const newScetion = await Topics.create({
    title,
    text,
    section,
    member,
    createdAt: new Date(),
  });
  res.send(newScetion);
});
router.put("/", async function (req, res) {
  const { title, text, _id } = req.body;
  const newScetion = await Topics.findByIdAndUpdate(
    {
      title,
      text,
      _id,
      createdAt: new Date(),
    },
    { new: true }
  );
  res.send(newScetion);
});

router.delete("/", async function (req, res) {
  const { _id } = req.body;
  const newScetion = await Topics.findByIdAndUpdate(
    _id,
    {
      isvisible: false,
    },
    { new: true }
  );
  res.send(newScetion);
});
module.exports = router;
