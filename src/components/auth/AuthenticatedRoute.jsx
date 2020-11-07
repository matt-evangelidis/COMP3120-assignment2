import React from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

/**
 * A 'react-router-dom' route that redirects users to the login page if they are not successfully authenticated
 * @prop {Object} user - The object containing information about the signed in user, null if user is not signed in
 * @prop {string} path - The path to be routed
 */
function AuthenticatedRoute(props) {
	if (props.user) {
		return <Route {...props}>{props.children}</Route>;
	} else {
		return <Redirect to="/login" />;
	}
}

export default AuthenticatedRoute;
