import React, { useState, useEffect } from "react";

import GridLayout, { WidthProvider } from "react-grid-layout";
import Button from "@material-ui/core/Button";

import Note from "./Note";

// const GridEl = WidthProvider(GridLayout);

function Sheet(props) {
	// const [state, setState] = useState('');

	// useEffect(() => {
	// 	return () => {

	//     }
	// }, []);

	const [notes, setNotes] = useState([]);
	const [noteSequencer, setNoteSequencer] = useState(0);

	function addNote() {
		setNotes([...notes, noteSequencer])
		setNoteSequencer(noteSequencer + 1)
	}
	
	function handleLayoutChange(layout) {
		console.log(layout)
	}

	return (
		<div>
			<Button onClick={addNote} >Add note</Button>
			<GridLayout
				cols={12}
				rowHeight={30}
				width={window.screen.width}
				verticalCompact={false}
				resizeHandle={<div></div>}
				onLayoutChange={handleLayoutChange}
			>
				{
					notes.map((note) =>
						<div key={note}>
							<Note></Note>
						</div>
					)
				}
			</GridLayout>
		</div>

		//? I trued moving the 'div' wrappers into the 'Note' component but that caused the resize handles to not show up for some reason
	);
}

export default Sheet;
