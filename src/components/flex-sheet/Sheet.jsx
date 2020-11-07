import React, { useState } from "react";

import axios from "axios";

import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Modal from "@material-ui/core/Modal";
import { useTheme } from "@material-ui/core/styles";

import GridLayout from "react-grid-layout";

import parseHTML from "html-react-parser";

import Note from "./Note";
import TextEditor from "./TextEditor";

/**
 * A 'flex sheet', the primary purpose of this whole app
 * @prop {Object} user - The object containing information about the signed in user, null if user is not signed in
 * @prop {string} sheetId - The id of the sheet. Used to fetch saved sheet from backend.
 */
function Sheet(props) {
	const user = props.user;
	const [notes, setNotes] = useState([0]);
	const [noteSequencer, setNoteSequencer] = useState(1);
	const [layout, setLayout] = useState([]);
	const [sheetName, setSheetName] = useState("");
	const [editingNote, setEditingNote] = useState(null);

	const [width, setWidth] = useState(window.innerWidth);

	const theme = useTheme();

	const actionButtonWrapperStyle = {
		position: "fixed",
		top: theme.variables.navbarHeight + theme.spacing(2),
		right: theme.spacing(2),
	};

	if (props.sheetId && !layout.length) {
		//# If the sheet has an iD and no notes in it, fetch notes from backend
		axios.get(`/api/sheets/${props.sheetId}`).then((result) => {
			const notePad = [];
			for (let i = 0; i < result.data.notes.length; i++) {
				notePad.push(i);
			}
			setNotes(notePad);
			setNoteSequencer(notePad.length);
			setLayout(result.data.notes);
			setSheetName(result.data.name);

			console.log("fetched sheet data successfully");
		});
	}

	/**
	 * When the sheet component is first mounted, add a resize event handler to resize width of sheet columns
	 */
	React.useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
	}, []);

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
		for (let i = 0; i < layout.length; i++) {
			const oldItem = layout[i];
			newLayout[oldItem.i].content = oldItem.content;
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
				sheet: {
					name: sheetName,
					notes: layout,
				},
			})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	/**
	 * Save newly edited content of a note
	 * @param {string} text - The content to be saved into note
	 */
	function saveNoteText(text) {
		const newLayout = layout;
		newLayout[editingNote.i].content = text;
		setLayout(newLayout);
	}

	return (
		<div className="sheet">
			<span>Sheet Name</span>
			<input
				type="text"
				value={sheetName}
				onChange={(e) => setSheetName(e.target.value)}
			></input>
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
						<Note setEditingNote={setEditingNote} data={layout[note]}>
							{parseHTML(layout[note]?.content || "default")}
						</Note>
					</div>
				))}
			</GridLayout>
			<div id="sheet-action-buttons" style={actionButtonWrapperStyle}>
				<SheetActionButton onClick={addNote}>
					<Icon>add</Icon>
				</SheetActionButton>
				{user && (
					<SheetActionButton onClick={saveSheet}>
						<Icon>save</Icon>
					</SheetActionButton>
				)}
			</div>
			<Modal open={editingNote ? true : false}>
				<Card className="text-editor-card">
					<TextEditor
						save={saveNoteText}
						editingNote={editingNote}
						close={() => setEditingNote(null)}
					></TextEditor>
				</Card>
			</Modal>
		</div>
	);
	//TODO: Better width scaling (eg; Minimum card width, change columns, actually use libraries scaling?)
	//TODO: Save changes to existing sheet instead of always creating a new one. Use the sheet id in the window address bar to determine where to save it
}

/**
 * Component for floating 'sheet action buttons'
 * @prop {*} * - All passed props are passed down to the root 'Fab' element
 */
function SheetActionButton(props) {
	const theme = useTheme();
	const style = { marginRight: theme.spacing(1) };
	return (
		<Fab {...props} color="primary" style={style}>
			{props.children}
		</Fab>
	);
}

export default Sheet;
