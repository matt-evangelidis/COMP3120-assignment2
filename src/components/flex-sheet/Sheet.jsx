import "./Sheet.scss";

import React, { useState } from "react";

import GridLayout from "react-grid-layout";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

import { useTheme } from "@material-ui/core/styles";

import Note from "./Note";

function Sheet(props) {
	const [notes, setNotes] = useState([]);
	const [noteSequencer, setNoteSequencer] = useState(0);

	function addNote() {
		setNotes([...notes, noteSequencer]);
		setNoteSequencer(noteSequencer + 1);
	}

	function handleLayoutChange(layout) {
		console.log(layout);
	}

	return (
		<>
			<GridLayout
				cols={12}
				rowHeight={30}
				width={window.screen.width}
				verticalCompact={false}
				resizeHandle={<div></div>}
				onLayoutChange={handleLayoutChange}
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
