const mongoose   = require('mongoose');
mongoose.Promise = global.Promise;
//db connection
mongoose.connect('mongodb://localhost/Books');


module.exports = mongoose;