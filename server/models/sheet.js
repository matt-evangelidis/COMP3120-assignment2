//#uses mongoose to define the model for MongoDB
const mongoose = require('mongoose');
const util = require('./util');

//#runs the util.MongoosConnect to connect to the appropriate database
const url = process.env.MONGODB_URI;
util.mongooseConnect(url, "Sheet");

//#the sheetSchema stores an owning user and an array of Note objects as defined in models/note.js
const sheetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }]
});

//#clears unnecessary MongoDB default fields and renames the '_id' field to 'id'
sheetSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
});

const Sheet = mongoose.model('Sheet', sheetSchema);

module.exports = Sheet;