import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handlers = {
		username: (value) => setUsername(value),
		password: (value) => setPassword(value),
	};

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
			<Button variant="contained" disableElevation fullWidth color="primary">
				Login
			</Button>
			<Link to="/register">
				<Button variant="outlined" disableElevation fullWidth color="primary">
					Register
				</Button>
			</Link>
		</form>
	);
}

export default Login;
