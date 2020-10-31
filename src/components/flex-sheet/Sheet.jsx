import "./Sheet.scss";

import React, { useState } from "react";

import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

import Note from "./Note";

import GridLayout from "react-grid-layout";

function Sheet(props) {
	const [notes, setNotes] = useState([]);
	const [noteSequencer, setNoteSequencer] = useState(0);
	const [layout, setLayout] = useState([]);

	const [width, setWidth] = useState(window.innerWidth);

	React.useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
			console.log("resized");
		}
		window.addEventListener("resize", handleResize);
	});

	function addNote() {
		setNotes([...notes, noteSequencer]);
		setNoteSequencer(noteSequencer + 1);
	}

	function handleLayoutChange(newLayout) {
		console.log(newLayout);
		setLayout(newLayout);
	}

	return (
		<>
			<GridLayout
				cols={12}
				rowHeight={30}
				width={width}
				verticalCompact={false}
				onLayoutChange={handleLayoutChange}
				preventCollision={true}
			>
				{notes.map((note) => (
					<div key={note}>
						<Note></Note>
					</div>
				))}
			</GridLayout>
			<Fab onClick={addNote} color="primary" className="add-note-button">
				<Icon>add</Icon>
			</Fab>
		</>

		//? I trued moving the 'div' wrappers into the 'Note' component but that caused the resize handles to not show up for some reason
	);
}

export default Sheet;
