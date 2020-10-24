import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

function header(props) {
	return (
		<AppBar className="nav-bar" position="static">
			<Toolbar style={{ paddingLeft: 0 }}>
				<IconButton>
					<Icon>menu</Icon>
				</IconButton>
				<Typography variant="h6" style={{ flexGrow: 1 }}>
					Flex-Sheet
				</Typography>
				<Button component={Link} to="/login">
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
}

export default header;
