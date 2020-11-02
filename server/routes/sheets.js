//#Router for handling all requets to '/api/sheets'

const router = require("express").Router();
//const User = require("../models/user");
const Sheet = require("../models/sheet");
const Note = require("../models/note");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateLoginInput = require("../validation/login");

//#Get all sheets
router.route("/").get(async (req, res) => {
	console.log("Received request to fetch all sheets");

	const sheets = await Sheet.find({}).populate("notes");
	res.json(sheets);
});

//#Post sheet
/**
 * Takes a post request and saves provided sheet to database
 * @param {Object} user - User who is submitting the sheet
 * @param {string} user.username - The username of the submitting user
 * @param {string} user.token - JWT Authentication token
 * @param {Object} sheet - The sheet the user is submitting
 */
router.route("/").post(async (req, res) => {
	console.log("received POST request to save a sheet");
	//Request will contain user object that has user id and token
	const user = req.body.user;
	const sheet = req.body.sheet;

	//TODO: Find user object with provided user id and validate with jwt token

	//TODO: Save sheet if authenticated

	res.status(200).json({ user, sheet });
});

//#Get sheet by id
router.route("/:id").get(async (req, res) => {
	const id = req.params.id;
	const body = req.body;

	console.log("Recieved request to fetch sheet", id);

	let sheet = await Sheet.findById(id);
	let ids = sheet.notes;
	sheet.notes = await Note.find().where("_id").in(ids);

	res.json(sheet);
});

module.exports = router;
