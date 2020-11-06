import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Typography from "@material-ui/core/Typography";


import loginService from "../../services/login";

function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const handlers = {
		username: (value) => setUsername(value),
		password: (value) => setPassword(value),
	};

	const submitHandler = async () => {
		// const response = await loginService.login({ username, password });
		// if (!response) {
		// 	console.log("false response");
		// } else {
		// 	console.log("true response");
		// }
		loginService
			.login({ username, password })
			.then((res) => {
				props.setUserFn(res.data);
				history.push("/") //# Redirecting to home page after login using useHistory() function
				console.log("Login successful")
			})
			.catch((error) => {
				console.log("there was an error");
				alert("Incorrect username or password! Please try again") //# Alert for any login error
			});
	};

	const logout = (event) => {
        event.preventDefault()
        window.location.href = "/login"
	}

	// #If user already login, when click on the username again it will show that this account is currently login as...
	if(props.user){
		console.log("user is login")
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
        )
    } else {
		return (
			<ValidatorForm
				onSubmit={submitHandler}
			>
			<h2>Login</h2>
			<TextValidator
				variant="outlined"
				fullWidth
				label="Username"
				onChange={(e) => handlers.username(e.target.value)}
				name="username"
				value={username}
				validators={['required']}
				errorMessages={['This field is required']}
			/>
			<TextValidator
				variant="outlined"
				fullWidth
				label="Password"
				onChange={(e) => handlers.password(e.target.value)}
				name="password"
				type="password"
				value={password}
				validators={['required']}
				errorMessages={['This field is required']}
			/>
			<Button
				variant="contained"
				fullWidth
				color="primary"
				type="submit"
			>
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
