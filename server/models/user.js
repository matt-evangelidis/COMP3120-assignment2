//#uses mongoose to define the model for MongoDB
const mongoose = require("mongoose");
const util = require("./util");

//#uses the uniqueValidator to ensure the username is completely unique in the database
const uniqueValidator = require("mongoose-unique-validator");

//#runs the util.MongoosConnect to connect to the appropriate database
const url = process.env.MONGODB_URI;
util.mongooseConnect(url, "User");

//#the userSchema stores all relevant user information, along with an array of Sheet objects as defined in models/sheet.js
const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	registrationDate: { type: Date, default: Date.now() },
	sheets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sheet" }],
});

userSchema.plugin(uniqueValidator);

//#clears unnecessary MongoDB default fields and renames the '_id' field to 'id'
userSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
