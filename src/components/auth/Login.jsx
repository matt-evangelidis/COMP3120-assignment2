import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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

	// #If user already login, when click on the username again it will show that this account is currently login as...
	if(props.user){
		console.log("user is login")
		return (
            <div className="row">
                <p>Logged in as {props.user.username}</p>
            </div>
        )
    } else {
		return (
			<form>
				<Typography variant="h4" component="h1">
					Login
				</Typography>
				<TextField
					variant="outlined"
					fullWidth
					label="Username"
					value={username}
					onChange={(e) => handlers.username(e.target.value)}
				/>
				<TextField
					variant="outlined"
					fullWidth
					label="Password"
					value={password}
					onChange={(e) => handlers.password(e.target.value)}
					type="password"
				/>
				<Button
					variant="contained"
					disableElevation
					fullWidth
					color="primary"
					onClick={submitHandler}
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
			</form>
		);
	}
}

export default Login;
