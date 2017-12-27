// exports.haMiddleware = (req,res,nest) =>{
// req.name = 'nikita'
// next();
// }
const mongoose = require('mongoose');
const Hawker = require('../models/Hawker');
// const isObjectId = mongoose.ObjectId.isValid;

exports.hawkerView = (req, res) => {
  res.json('this is a hawker')
};
exports.addHawker = (req, res) => {
  res.json('this is a hawker add')
};
exports.createHawker = async (req, res) => {
  const hawker = new Hawker(req.body);
  console.log(hawker);
  await hawker.save();
  res.json({ message: ' Added' });
};

//to show or edit. use hawker response to populate edit form.
exports.editHawker = async (req, res) => {
  const id = req.params.hawker_id;
  const hawker = id.toString().match(/^[0-9a-fA-F]{24}$/) ?
  await Hawker.find(id) : await Hawker.findOne({ slug: id });
  res.json(hawker)
}

exports.updateHawker = async (req, res) => {
  console.log(req.body);
  const hawker = await Hawker.findOneAndUpdate({_id:req.params.hawker_id},
     req.body,
     {
       new:true, //returns the updated record, not the original one
       runValidators: true //ensures that model validations are run on update. default is for new only.
     }).exec()
  // alt:
  // const hawker = await Hawker.findById(req.params.hawker_id)
  // for (prop in req.body) {
  // hawker[prop] = req.body[prop];
  // }
  // await hawker.save();
  res.json({ message: ' updated' });
};
