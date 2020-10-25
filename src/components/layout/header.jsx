import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Header(props) {
	return (
		<AppBar className="nav-bar" position="static">
			<Toolbar>
				<Typography variant="h6">Flex-Sheet</Typography>
				<Button component={Link} to="/" style={{ margin: "auto" }}>
					Characters
				</Button>
				<Button component={Link} to="/login" style={{ marginRight: 0 }}>
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
