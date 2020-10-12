import "./styles/base.scss";

import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
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
	);
}

export default App;
