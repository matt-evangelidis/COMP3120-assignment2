import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// import { withStyles } from "@material-ui/core/styles";

// const styles = {
// 	textField: {
// 		width: "100%",
// 		marginBottom: 5,
// 	},
// 	btnBlock: {
// 		textAlign: "center",
// 	},
// };

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
		const { classes } = this.props;
		const { errors } = this.state;

		/* I removed the 'Paper' element because I think stuff like paper or cards should not be part of the actual component
        instead the something like 'Paper' would be wrapped around this component when it is usedOtherwise if we wanted to use 
        the register menu in a different place/context it might be awkward */
		return (
			<form onSubmit={this.handleSubmit}>
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
const mapStateToProps = (state) => ({
	errors: state.errors,
});

// export default connect(mapStateToProps, { registerUser })(
// 	withRouter(withStyles(styles)(Register))
// );
//Not sure what this actually is, commenting it out for now so I can use this component

export default Register;
