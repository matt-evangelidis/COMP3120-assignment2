//title
//content
//size
//position (JSON x and y)

const mongoose = require('mongoose');
const util = require('./util');

const url = process.env.MONGODB_URI;
util.mongooseConnect(url);

const noteSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String},
  size: {type: Number, min: 1, required: true},
  position: {
      x: {type: Number, min: 0, required: true},
      y: {type: Number, min: 0, required: true}
  },
});

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;