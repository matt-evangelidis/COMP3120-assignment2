//# Router for handlings all requests to '/api/users'

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateLoginInput = require("../validation/login");
// const validateRegisterInput = require('../validation/register')

//# login user if the correct information is used
router.route("/login").post((req, res) => {
	// const { errors, isValid } = validateLoginInput(req.body);

	// if (!isValid) {
	// 	return res.status(400).json(errors);
	// }

	//*AUTHENTICATION HERE

	const body = req.body

	// Search for user from database by the username attached in req
	const user = await User.findOne({ username: body.username })
	const passwordCorrect = user === null
		? false
		: await bcrypt.compare(body.password, user.passwordHash) //Check the password attached in req

	if (!(user && passwordCorrect)) {
		return response.status(401).json({error: 'invalid username or password'}) //401 - unauthorized if username or password is incorrect
	}
	
	const userForToken = {
		username: user.username,
		id: user._id,
	}

	// If username and password are correct, a token is created, which contains username, user id in a 
	// digitally signed form; it is signed using a string from the environment variable SECRET as the secret
	const token = jwt.sign(userForToken, process.env.SECRET)

	response
		.status(200) //Successful request
		.send({token, username: user.username, name: user.name }) //The generated token and the username of the user are sent back in the response body
	
});

router.route("/:username").get((req, res) => {
	const username = req.params.username;
});

router.route("/").get((req, res) => {});
//
module.exports = router;
