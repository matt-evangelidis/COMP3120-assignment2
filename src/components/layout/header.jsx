import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Header(props) {
	const sheetsLinkStyle = {
		margin: "auto",
	};

	const userButtonStyle = {
		marginRight: 0,
		marginLeft: props.user ? "unset" : "auto",
	};
	return (
		<AppBar className="nav-bar" position="static">
			<Toolbar>
				<Typography variant="h6">Flex-Sheet</Typography>
				{props.user && (
					<Button component={Link} to="/sheets" style={sheetsLinkStyle}>
						Sheets
					</Button>
				)}
				<Button component={Link} to="/login" style={userButtonStyle}>
					{props.user ? props.user.username : "Login"}
				</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
