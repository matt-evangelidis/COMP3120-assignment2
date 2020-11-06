import "./Note.scss";

import React, { useState, useEffect } from "react";

import Card from "@material-ui/core/Card";

function Note(props) {
	const style = {
		height: "100%",
		width: "100%",
	};

	function onDoubleClick() {
		props.setEditingSheet(props.data);
	}

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
