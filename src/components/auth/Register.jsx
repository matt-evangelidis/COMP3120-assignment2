import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/**
 * User registration form, is not implemented
 */
class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			password2: "",
			errors: {},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		const userData = {
			username: this.state.username,
			password: this.state.password,
			password2: this.state.password2,
		};
		this.props.registerUser(userData, this.props.history);
	}
	// Registration form
	render() {
		const { errors } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<Typography variant="h4" component="h1">
					Register
				</Typography>
				<TextField
					type="username"
					label="Username"
					name="username"
					// className={classes.textField}
					value={this.state.username}
					onChange={this.handleChange}
					helperText={errors.username ? errors.username : ""}
					error={errors.username ? true : false}
					variant="outlined"
					fullWidth
				/>
				<TextField
					type="password"
					label="Password"
					name="password"
					// className={classes.textField}
					value={this.state.password}
					onChange={this.handleChange}
					helperText={errors.password ? errors.password : ""}
					error={errors.password ? true : false}
					variant="outlined"
					fullWidth
				/>
				<TextField
					type="password"
					label="Repeat Password"
					name="password2"
					// className={classes.textField}
					fullWidth
					value={this.state.password2}
					onChange={this.handleChange}
					helperText={errors.password2 ? errors.password2 : ""}
					error={errors.password2 ? true : false}
					variant="outlined"
				/>

				<div
				// className={classes.btnBlock}
				>
					<Button
						variant="contained"
						type="submit"
						fullWidth
						color="primary"
						disableElevation
					>
						Register
					</Button>
				</div>
			</form>
		);
	}
}
export default Register;
