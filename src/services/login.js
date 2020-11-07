import axios from "axios";
const url = "/api/users/login";

/**
 * Send a post request to sign in user
 * @param {Object} credentials - Credentials entered into login form by user
 * @param {string} credentials.username - Provided username
 * @param {string} credentials.password - Provided username
 * @returns {Promise} The promise for the post request
 **/
const login = async (credentials) => {
	console.log(credentials);
	return axios.post(url, credentials);
};

export default { login };
