const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/Regdatabase";
console.log(mongoURL);
mongoose.connect(mongoURL,function(err, result) {
  if (err) {
    console.log(err);
  }else {
    console.log("Connected to Regdatabase2.");
  }
});


var UserSchema = mongoose.Schema({
    regis: String,


});



var user = mongoose.model('Regdatabase', UserSchema);
module.exports = user;
