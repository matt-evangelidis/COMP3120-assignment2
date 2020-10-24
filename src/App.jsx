import "./styles/base.scss";
import "./styles/forms.scss";


import React, {useState} from 'react';
import "material-design-icons/iconfont/material-icons.css";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import theme from "./Theme";
import Login from "./components/LoginForm";
//import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Button from './components/Button'

import Header from "./components/layout/header";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Sheet from "./components/flex-sheet/Sheet";

function App() {
	const formCardStyle = { width: "700px", margin: "auto" };
	const [user, setUser] = useState(null) //Keep track of user login status

	//handle logout
	const logoutHandler = () => {
		setUser(null)
	  }
	
	//handle user login
	const userLoginHandler = (user) => {
		setUser(user)
	}

	return (
		<ThemeProvider theme={theme}>
			{/* Passes a 'theme' object down to children component which Material UI automatically integrates into its component styling */}
			<CssBaseline />
			{/* Provides a baseline css stylesheet that will override any default browser styles*/}
			{/*This eliminates visual discrepancies caused by differing default browser stylesheets */}
			<Router>
				<div className="App">
				<div>
					{user !== null
					? <span>
						<em> {user.name} logged in </em> 
						<Button eventHandler={logoutHandler} text="logout"/>
						</span>
					: <Link to="/login">Login Page</Link>
					}
				</div>
					<Switch>
						<Route path="/login">
              				<Login user={user} userLoginHandler={userLoginHandler}/>
           				</Route>
						<Route path="/register">
							<Paper style={formCardStyle}>
								<Register />
							</Paper>
						</Route>
						<Route path="/">
							<Paper style={formCardStyle}>
								<Login />
							</Paper>
						</Route>
					</Switch>
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
