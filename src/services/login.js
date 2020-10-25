import axios from "axios";
const url = "/api/users/login";

// sending the HTTP post request to server address ‘/login’
const login = async (credentials) => {
	const response = await axios.post(url, credentials);
	return response.data;
};

export default { login };
