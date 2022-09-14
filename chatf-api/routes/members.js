var express = require("express");
var router = express.Router();
const Members = require("../schemas/member.schema copy");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const Sections = await Members.find();
  res.send(Sections);
});
router.post("/", async function (req, res, next) {
  const { username, password, email, gender, bd } = req.body;
  const newScetion = await Members.create({
    username,
    password,
    email,
    gender,
    bd,
    createdAt: new Date(),
  });
  res.send(newScetion);
});
router.put("/", async function (req, res) {
  const { username, password, email, gender, bd, _id } = req.body;
  const newScetion = await Members.findByIdAndUpdate(
    _id,
    {
      username,
      password,
      email,
      gender,
      bd,
    },
    { new: true }
  );
  res.send(newScetion);
});

router.delete("/", async function (req, res) {
  const { _id } = req.body;
  const newScetion = await Members.findByIdAndUpdate(
    _id,
    {
      isvisible: false,
    },
    { new: true }
  );
  res.send(newScetion);
});
module.exports = router;
