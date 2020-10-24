import "./styles/base.scss";
import "./styles/forms.scss";

import "material-design-icons/iconfont/material-icons.css";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import theme from "./Theme";

import Header from "./components/layout/header";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Sheet from "./components/flex-sheet/Sheet";

function App() {
	const formCardStyle = { width: "700px", margin: "auto" };

	return (
		<ThemeProvider theme={theme}>
			{/* Passes a 'theme' object down to children component which Material UI automatically integrates into its component styling */}
			<CssBaseline />
			{/* Provides a baseline css stylesheet that will override any default browser styles*/}
			{/*This eliminates visual discrepancies caused by differing default browser stylesheets */}
			<Router>
				<div className="App">
					<Header />
					<div className="content">
						<Switch>
							<Route path="/register">
								<Paper style={formCardStyle}>
									<Register />
								</Paper>
							</Route>
							<Route path="/login">
								<Paper style={formCardStyle}>
									<Login />
								</Paper>
							</Route>
							<Route path="/">
								<Sheet></Sheet>
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
