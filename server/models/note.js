//#uses mongoose to define the model for MongoDB
const mongoose = require('mongoose');
const util = require('./util');

//#runs the util.MongoosConnect to connect to the appropriate database
const url = process.env.MONGODB_URI;
util.mongooseConnect(url, "Note");


//#the Note Schema stores fields that are used by the Note component 
//#in conjunction with the Sheet component to be displayed correctly
const noteSchema = new mongoose.Schema({
  //#content
  title: { type: String, required: true },
  content: { type: String },

  //#index
  i: { type: String },

  //#sizing
  x: { type: Number, min: 0, required: true },
  y: { type: Number, min: 0, required: true },
  w: { type: Number, min: 1, required: true },
  h: { type: Number, min: 1, required: true },
  maxH: { type: Number, max: Infinity },
  maxW: { type: Number, max: Infinity },
  minH: { type: Number, min: 0 },
  minW: { type: Number, min: 0 },

  //#flags
  static: { type: Boolean, default: false },
  isDraggable: { type: Boolean, default: true },
  isResizable: { type: Boolean, default: true },
  resizeHandles: [{ type: String }],
  isBounded: { type: Boolean, default: false },
  moved: { type: Boolean },
});


//#clears unnecessary MongoDB default fields and renames the '_id' field to 'id'
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;