//sheets belong to a user, user contains an array of sheets
//id
//name
//notes(array)
//mongoose schema
const mongoose = require('mongoose');
const util = require('./util');

const url = process.env.MONGODB_URI;
util.mongooseConnect(url);

const sheetSchema = new mongoose.Schema({
  user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: {type: String, required: true},
  notes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Note'}]
});

sheetSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
});

const Sheet = mongoose.model('Sheet', sheetSchema);

module.exports = Sheet;