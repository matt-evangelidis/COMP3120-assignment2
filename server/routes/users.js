//# Router for handlings all requests to '/api/users'

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateLoginInput = require("../validation/login");
// const validateRegisterInput = require('../validation/register')

router.post("/login", (req, res) => {
	// Form validation
	const { errors, isValid } = validateLoginInput(req.body);

	// Check validation
	if (!isValid) {
	  return res.status(400).json(errors);
	}
	const username = req.body.username;
	const password = req.body.password;

	//Find user by username
	User.findOne({ username }).then(user => {
	  //Check if user exists
	  if (!user) {
		return res.status(404).json({ Username: "username not found" });
	  }
	
	const userForToken = {
		username: user.username,
		id: user._id,
	};
		
	//# If username and password are correct, a token is created, which contains username, user id in a
	//# digitally signed form; it is signed using a string from the environment variable SECRET as the secret
	const token = jwt.sign(userForToken, process.env.SECRET);
		
	res
		.status(200) //*Successful request
		.send({ token, username: user.username, name: user.name }); //*The generated token and the username of the user are sent back in the response body

	if (!password) {
		console.log("Login failed - bad credentials");
		return res.status(400).json({ error: "invalid password" }); //*400 - unauthorized if password is incorrect
	} 
	});
 });

//TODO: User registration (with encrypted password storing)

router.route("/:username").get(async (req, res) => {
	console.log("Received request to fetch user info");
	const username = req.params.username;
	const user = await User.find({ username: username });
	res.json(user);
});

router.route("/").get(async (req, res) => {
	console.log("Received get request to root users api url");
	const users = await User.find({});
	res.json(users);
});
//
module.exports = router;
