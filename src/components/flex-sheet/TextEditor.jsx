import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
	Editor,
	EditorState,
	ContentState,
	convertFromHTML,
	convertFromRaw,
} from "draft-js";
import { stateToMarkdown } from "draft-js-export-markdown";
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
		props.save(stateToMarkdown(e.getCurrentContent()));
	}

	// useEffect(() => {
	// 	console.log(props.editingNote);
	// 	// props.editingNote.content
	// 	const blocks = convertFromHTML(`<p>default</p>`);
	// 	setEditorState(state);
	// }, []);

	return <Editor editorState={editorState} onChange={save} />;
}

export default TextEditor;
