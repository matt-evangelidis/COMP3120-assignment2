import React, { useState } from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";

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

	function Contents() {
		const sheetLinks = [];
		if (sheets.length) {
			sheets.map((sheet, index) => {
				sheetLinks.push(
					<li>
						<Link to={`/sheet/${sheet.id}`}>{sheet.name}</Link>
					</li>
				);
			});
			// return <>
			//     {sheetLinks}
			//     <Link to="/">Create new sheet</Link>
			// </>
		}
		const body = sheetLinks.length ? sheetLinks : <h2>No Sheets</h2>;
		return (
			<>
				{body}
				<Link to="/">Create new sheet</Link>
			</>
		);
	}

	return (
		<div className="sheets-list">
			<Contents />
		</div>
	);
}

export default SheetList;
