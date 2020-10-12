import "./styles/base.scss";

import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "./Theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* Passes a 'theme' object down to children component which Material UI automatically integrates into its component styling */}
			<CssBaseline />
			{/* Provides a baseline css stylesheet that will override any default browser styles*/}
			{/*This eliminates visual discrepancies caused by differing default browser stylesheets */}
			<Router>
				<div className="App">
					<Switch>
						<Route path="/">
							<h1 id="hw">
								Hello <span className="world">World</span>
							</h1>
						</Route>
					</Switch>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
