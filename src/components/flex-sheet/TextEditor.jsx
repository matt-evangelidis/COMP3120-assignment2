import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
	Editor,
	EditorState,
	ContentState,
	convertFromHTML,
	RichUtils,
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "draft-js/dist/Draft.css";

function TextEditor(props) {
	const blocksFromHTML = convertFromHTML(
		props.editingNote.content || "default"
	);
	const state = ContentState.createFromBlockArray(
		blocksFromHTML.contentBlocks,
		blocksFromHTML.entityMap
	);
	const [editorState, setEditorState] = useState(() =>
		EditorState.createWithContent(state)
	);

	function save(e) {
		setEditorState(e);
		props.save(stateToHTML(e.getCurrentContent()));
	}

	function handleKeyCommand(command) {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			setEditorState(newState);
			return "handled";
		}
		return "not-handled";
	}

	return (
		<Editor
			editorState={editorState}
			onChange={save}
			handleKeyCommand={handleKeyCommand}
		/>
	);
}

export default TextEditor;
