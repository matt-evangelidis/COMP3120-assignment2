import "./Note.scss";

import React, { useState, useEffect } from "react";

import Card from "@material-ui/core/Card";

/**
 * A note that appears on a sheet
 * @prop {Object} data - The information of the Note's properties relevant to the sheet eg; its position and dimensions
 * @prop {function} setEditingNote - The function to set the state value that represents what note is currently being edited, null if no note is being edited
 */
function Note(props) {
	const style = {
		height: "100%",
		width: "100%",
	};

	/**
	 * Handles the user double clicking a note (opens the editing interface)
	 */
	function onDoubleClick() {
		props.setEditingNote(props.data);
	}
	//TODO: Replace double click with an alternative way of opening the editor

	return (
		<Card
			style={style}
			{...props}
			onDoubleClick={onDoubleClick}
			className="flex-sheet-note"
		>
			{props.children}
		</Card>
	);
}

export default Note;
