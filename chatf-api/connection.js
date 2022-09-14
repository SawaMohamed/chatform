const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mohamed:dwoZvPzD0UCbs57G@test.4i6mk.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('It has been connected');
});