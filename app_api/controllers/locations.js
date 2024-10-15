const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

module.exports = {
  locationsListByDistance,
  locationsCreate,
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
  };