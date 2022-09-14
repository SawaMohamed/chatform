var express = require('express');
var router = express.Router();
const Sections = require('../schemas/sections.schema copy 2')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const sections = await Sections.find()
  res.send(sections);
});
router.post('/', async function(req, res, next) {
  const {name, discription} = req.body;
 const newScetion = await Sections.create({
  name,
  discription,
  createdAt: new Date()
 })
 res.send(newScetion);
});
router.put('/', async function(req, res){
const {name, discription, _id} = req.body;
const newScetion = await Sections.findByIdAndUpdate(_id,
   {
    name,
    discription,
},{new: true});
res.send(newScetion)
})
router.delete('/', async function(req, res){
const { _id } = req.body;
const newScetion = await Sections.findByIdAndUpdate(_id,
{
  isvisible: false,
}, {new: true})
res.send(newScetion)
});
module.exports = router;
