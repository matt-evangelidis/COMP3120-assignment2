import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Login() {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

	const handlers = {
		username: (value) => setUsername(value),
		password: (value) => setPassword(value),
	};

	return (
		<form>
			<TextField
				variant="outlined"
				fullWidth
				label="Username"
				color="secondary"
				value={username}
				onChange={(e) => handlers.username(e.target.value)}
				className="input"
			/>
			<TextField
				variant="outlined"
				fullWidth
				label="Password"
				color="secondary"
				value={password}
				onChange={(e) => handlers.password(e.target.value)}
				type="password"
				className="input"
			/>
			<Button
				variant="contained"
				color="secondary"
				className="input"
				disableElevation
				fullWidth
			>
				Login
			</Button>
			<Button
				variant="outlined"
				color="secondary"
				className="input"
				disableElevation
				fullWidth
			>
				Sign Up
			</Button>
		</form>
	);
}

export default Login;
