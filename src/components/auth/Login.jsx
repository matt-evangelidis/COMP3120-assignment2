import React, { useState } from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from "react-router-dom";

import Button from "@material-ui/core/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import loginService from "../../services/login";

/**
 * Login form
 * @prop {Object} user - The object containing information about the signed in user, null if user is not signed in
 * @prop {function} setUserFn - The state setting function to set the user state value
 */
function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const handlers = {
		username: (value) => setUsername(value),
		password: (value) => setPassword(value),
	};

	/**
	 * Handle user trying to submit the form
	 */
	const submitHandler = async () => {
		loginService
			.login({ username, password })
			.then((res) => {
				props.setUserFn(res.data);
				history.push("/"); //* Redirecting to home page after login using useHistory() function
				console.log("Login successful");
			})
			.catch((error) => {
				console.log("there was an error");
				alert("Incorrect username or password! Please try again"); //* Alert for any login error
			});
	};

	/**
	 * Log the signed in user out
	 * @param {Object} event - The event triggered by the user trying to logout
	 */
	const logout = (event) => {
		event.preventDefault();
		window.location.href = "/login";
	};

	//# If user already login, when click on the username again it will show that this account is currently login as...
	if (props.user) {
		console.log("user is login");
		return (
			<form>
				<p>You are logged in as {props.user.username}</p>
				<Button
					variant="contained"
					disableElevation
					fullWidth
					color="primary"
					onClick={logout}
				>
					Logout
				</Button>
				<Button
					variant="outlined"
					disableElevation
					fullWidth
					color="primary"
					component={Link}
					to="/"
				>
					Home
				</Button>
			</form>
		);
	//#  ... Otherwise the user will need to login 
	} else {
		return (
			<ValidatorForm onSubmit={submitHandler}> //* Validating the form
				<h2>Login</h2>
				<TextValidator
					variant="outlined"
					fullWidth
					label="Username"
					onChange={(e) => handlers.username(e.target.value)}
					name="username"
					value={username}
					validators={["required"]} //* This is for validating that the username field is required for login
					errorMessages={["Password field is required"]} //* ...and if the field is empty return the following message
				/>
				<TextValidator
					variant="outlined"
					fullWidth
					label="Password"
					onChange={(e) => handlers.password(e.target.value)}
					name="password"
					type="password"
					value={password}
					validators={["required"]} //* This is for validating that the password field is required for login
					errorMessages={["Password field is required"]} //* ...and if the field is empty return the following message
				/>
				<Button variant="contained" fullWidth color="primary" type="submit">
					Login
				</Button>
				<Button
					variant="outlined"
					disableElevation
					fullWidth
					color="primary"
					component={Link}
					to="/register"
				>
					Register
				</Button>
			</ValidatorForm>
		);
	}
}

export default Login;
