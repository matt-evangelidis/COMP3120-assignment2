import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import axios from "axios";

function SheetList(props) {
	const user = props.user;

	const [sheets, setSheets] = useState([]);

	if (!sheets.length) {
		axios.get(`/api/sheets/list/${user.username}`).then((result) => {
			setSheets(result.data);
			console.log(result.data);
		});
	}

	return (
		<div className="sheets-list">
			{sheets.length ? (
				sheets.map((sheet, index) => {
					return (
						<li>
							<Link to={`/sheet/${sheet.id}`}>{sheet.name}</Link>
						</li>
					);
				})
			) : (
				<h2>No sheets</h2>
			)}
		</div>
	);
}

export default SheetList;
