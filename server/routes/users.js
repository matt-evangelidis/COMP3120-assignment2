//# Router for handlings all requests to '/api/users'

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateLoginInput = require("../validation/login");
// const validateRegisterInput = require('../validation/register')

//# login user if the correct information is used
router.route("/login").post((req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	//*AUTHENTICATION HERE
});

router.route("/:username").get((req, res) => {
	const username = req.params.username;
});

router.route("/").get((req, res) => {});
//
module.exports = router;
