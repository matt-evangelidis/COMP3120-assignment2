//mongoose schema
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const util = require("./util");

const url = process.env.MONGODB_URI;
util.mongooseConnect(url, "User");

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	registrationDate: { type: Date, default: Date.now() },
	sheets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sheet" }],
});

userSchema.plugin(uniqueValidator);

userSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
