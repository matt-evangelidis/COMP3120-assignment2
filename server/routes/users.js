//# Router for handlings all requests to '/api/users'

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateLoginInput = require("../validation/login");
// const validateRegisterInput = require('../validation/register')

// # Login endpoint
router.post("/login", (req, res) => {
	// # Form validation
	const { errors, isValid } = validateLoginInput(req.body);

	// # Check validation
	if (!isValid) {
	  return res.status(400).json(errors);
	}
	const username = req.body.username;
	const password = req.body.password;

	// # Find user by username
	User.findOne({ username }).then(user => {

		// # Check if user exists
		if (!user) {
			return res.status(404).json({ Username: "username not found" });
		}

		// # comparing password and check if its correct
		// const passwordCorrect =	
			// 	user === null	
			// 		? false	
			// 		: await bcrypt.compare(password, user.passwordHash);	
			//Check the password attached in req

		//? Temporary tweak to password comparison as currently the database is storing raw passwords and not encrypted passwords
		const passwordCorrect =	
			user === null 
				? false 
				: password === user.password;

		if (!passwordCorrect) {
			console.log("Login failed - bad credentials");
			return res.status(400).json({ error: "invalid password" }); // * Return 400 Error - if password is incorrect
		}
		
		const userForToken = {
			username: user.username,
			id: user._id,
		};
			
		//# If username and password are correct, a token is created, which contains username, user id in a
		//# digitally signed form; it is signed using a string from the environment variable SECRET as the secret
		const token = jwt.sign(userForToken, process.env.SECRET);
			
		res
			.status(200) // * Successful request
			.send({ token, username: user.username, name: user.name }); // * The generated token and the username of the user are sent back in the response body
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
