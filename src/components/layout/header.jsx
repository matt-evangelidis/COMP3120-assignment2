import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";

function Header(props) {
	const [drawerStatus, setDrawerStatus] = useState(false);

	const drawerClickOut = (event) => {
		if (!event.target.classList.contains("drawer-body")) {
			setDrawerStatus(false);
		}
	};

	return (
		<>
			<AppBar className="nav-bar" position="static">
				<Toolbar style={{ paddingLeft: 0 }}>
					{/* <IconButton onClick={() => setDrawerStatus(!drawerStatus)}>
						<Icon>menu</Icon>
					</IconButton> */}
					<Typography variant="h6">Flex-Sheet</Typography>
					<Button component={Link} to="/" style={{ margin: "auto" }}>
						Characters
					</Button>
					<Button component={Link} to="/login" style={{ marginRight: 0 }}>
						Login
					</Button>
				</Toolbar>
			</AppBar>

			{/* <Drawer
				open={drawerStatus}
				PaperProps={{
					className: "drawer-body",
				}}
				onClick={drawerClickOut}
			>
				This is the drawer
			</Drawer> */}
		</>
	);
}

export default Header;
