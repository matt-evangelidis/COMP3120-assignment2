import "./styles/base.scss";
import "./styles/forms.scss";

import React, { useState } from "react";

import "material-design-icons/iconfont/material-icons.css";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import theme from "./Theme";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer"


import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Sheet from "./components/flex-sheet/Sheet";

function App() {
	const formCardStyle = { width: "700px", margin: "auto" };
	const [user, setUser] = useState(null); //Keep track of user login status

	return (
		<ThemeProvider theme={theme}>
			{/* Passes a 'theme' object down to children component which Material UI automatically integrates into its component styling */}
			<CssBaseline />
			{/* Provides a baseline css stylesheet that will override any default browser styles*/}
			{/*This eliminates visual discrepancies caused by differing default browser stylesheets */}
			<Router>
				<div className="App">
					<Header user={user} />
					<div className="content">
						<Switch>
							<Route path="/register">
								<Paper style={formCardStyle}>
									<Register />
								</Paper>
							</Route>
							<Route path="/login">
								<Paper style={formCardStyle}>
									<Login user={user} setUserFn={setUser} />
								</Paper>
							</Route>
							<Route path="/">
								<Sheet></Sheet>
							</Route>
						</Switch>
					</div>
				</div>
				<Footer/>
			</Router>
		</ThemeProvider>
	);
}

export default App;
