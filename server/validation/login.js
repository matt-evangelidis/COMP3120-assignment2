const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function (data) {
	let errors = {};
	// Username Fields
	if (Validator.isEmpty(String(data.username))) {
		errors.username = "Username field is required";
	}
	// Password Fields
	if (Validator.isEmpty(String(data.password))) {
		errors.password = "Password field is required";
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};

// placeholder
