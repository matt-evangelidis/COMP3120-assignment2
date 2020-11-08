const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function (data) {
	let errors = {};
	// # Checking if the Username Field us empty
	if (Validator.isEmpty(String(data.username))) {
		errors.username = "Username field is required"; //*If so return the following message
	}
	// # Checking if the Password Field us empty
	if (Validator.isEmpty(String(data.password))) {
		errors.password = "Password field is required"; //*If so return the following message
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
