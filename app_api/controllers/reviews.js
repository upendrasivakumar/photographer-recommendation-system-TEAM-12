const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsCreate = (req, res) => {
  res
  .status(200)
  .json({"status" : "success"});
  };