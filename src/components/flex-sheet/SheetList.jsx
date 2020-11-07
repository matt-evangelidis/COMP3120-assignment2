import React, { useState } from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";

import axios from "axios";

/**
 * The list of a user's saved sheets
 * @prop {Object} user - The object containing information about the signed in user, null if user is not signed in
 */
function SheetList(props) {
	const user = props.user;

	const [sheets, setSheets] = useState([]);

	if (!sheets.length) {
		axios.get(`/api/sheets/list/${user.username}`).then((result) => {
			setSheets(result.data);
		});
	}

	/**
	 * List of user's saved sheets
	 */
	function Sheets() {
		const sheetLinks = [];
		if (sheets.length) {
			sheets.map((sheet, index) => {
				sheetLinks.push(
					<li>
						<Link to={`/sheet/${sheet.id}`}>{sheet.name}</Link>
					</li>
				);
			});
		}
		const body = sheetLinks.length ? sheetLinks : <h2>No Sheets</h2>;
		return body;
	}

	return (
		<div className="sheets-list">
			<Sheets />
			<Link to="/">Create new sheet</Link>
		</div>
	);
}

export default SheetList;
