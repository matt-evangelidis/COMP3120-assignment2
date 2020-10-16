const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateLoginInput = require("../validation/login");
// const validateRegisterInput = require('../validation/register')

// login user is the correct information is used
router.route("/login").post((req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({ username: req.body.username }).then((user) => {
		if (user) {
			bcrypt.compare(req.body.password, user.password).then((isMatch) => {
				if (isMatch) {
					const token = jwt.sign(
						{ id: user._id },
						process.env.SECRET,
						{ expiresIn: "1d" },
						function (err, token) {
							return res.json({
								success: true,
								token: token,
							});
						}
					);
				} else {
					errors.password = "Password is incorrect";
					return res.status(404).json(errors);
				}
			});
		} else {
			errors.username = "User not found";
			return res.status(400).json(errors);
		}
	});
});
//
router
	.route("/")
	.get(passport.authenticate("jwt", { session: false }), (req, res) => {
		res.json({
			id: req.user.id,
			username: req.user.username,
			registrationDate: req.user.registrationDate,
		});
	});
//
router.route("/:username").get((req, res) => {
	User.findOne({ username: req.params.username })
		.then((user) => {
			if (user) {
				return res.json({
					id: user.id,
					username: user.username,
					registrationDate: req.user.registrationDate,
				});
			} else {
				return res.status(404).json({ msg: "User not fouund" });
			}
		})
		.catch((err) => console.log(err));
});
module.exports = router;
