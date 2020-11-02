import "./Sheet.scss";

import React, { useState } from "react";

import axios from "axios";

import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

import GridLayout from "react-grid-layout";

import Note from "./Note";

function Sheet(props) {
	const user = props.user;
	const [notes, setNotes] = useState([0]);
	const [noteSequencer, setNoteSequencer] = useState(1);
	const [layout, setLayout] = useState([]);

	const [width, setWidth] = useState(window.innerWidth);

	React.useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
	});

	/**
	 * Adds a note to the sheet
	 */
	function addNote() {
		setNotes([...notes, noteSequencer]);
		setNoteSequencer(noteSequencer + 1);
	}

	/**
	 * Update the 'layout' state object when the sheet's layout is changed
	 * @param {Object} newLayout - The new layout
	 */
	function handleLayoutChange(newLayout) {
		if (newLayout.length > layout.length) {
			newLayout[newLayout.length - 1].y = getNewY(newLayout);
		}
		setLayout(newLayout);
	}

	/**
	 * Determines what the 'y' position of a newly added card should be
	 * @param {Object} newLayout - The layout of the notes on the sheet
	 * @returns {Number} The number that should be used for the latest note's 'y' coordinate
	 */
	function getNewY(newLayout) {
		const takenY = [];
		var largestY = -1;
		for (let item of newLayout) {
			if (item.x === 0) {
				takenY.push(item.y);
				largestY = Math.max(largestY, item.y);
			}
		}
		for (let i = 0; i <= largestY; i++) {
			if (!takenY.includes(i)) {
				return i;
			}
		}
		return largestY;
	}

	/**
	 * Save sheet to database
	 */
	function saveSheet() {
		axios
			.post("/api/sheets", {
				user: {
					username: user.username,
					token: user.token,
				},
				sheet: layout,
			})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	//TODO: Better width scaling (eg; Minimum card width, change columns, actually use libraries scaling?)
	return (
		<>
			<GridLayout
				cols={12}
				rowHeight={30}
				width={width}
				verticalCompact={false}
				onLayoutChange={handleLayoutChange}
				preventCollision={true}
				layout={layout}
			>
				{notes.map((note) => (
					<div key={note}>
						<Note></Note>
					</div>
				))}
			</GridLayout>
			<div id="sheet-action-buttons">
				<Fab onClick={addNote} color="primary" className="add-note-button">
					<Icon>add</Icon>
				</Fab>
				<Fab onClick={saveSheet} color="primary" className="add-note-button">
					<Icon>save</Icon>
				</Fab>
			</div>
		</>

		//? I trued moving the 'div' wrappers into the 'Note' component but that caused the resize handles to not show up for some reason
	);
}

export default Sheet;
