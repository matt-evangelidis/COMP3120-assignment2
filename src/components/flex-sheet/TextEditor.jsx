import "./TextEditor.scss";

import React, { useState } from "react";
import {
	Editor,
	EditorState,
	ContentState,
	convertFromHTML,
	RichUtils,
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "draft-js/dist/Draft.css";

import Button from "@material-ui/core/Button";

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
		props.close();
	}

	function handleKeyCommand(command) {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			setEditorState(newState);
			return "handled";
		}
		return "not-handled";
	}

	function applyStyle(style) {
		setEditorState(RichUtils.toggleInlineStyle(editorState, style));
	}

	const buttonHandlers = {
		italic: (e) => {
			e.preventDefault();
			applyStyle("ITALIC");
		},
		bold: (e) => {
			e.preventDefault();
			applyStyle("BOLD");
		},
		underline: (e) => {
			e.preventDefault();
			applyStyle("UNDERLINE");
		},
	};
	//TODO: Don't deselect text when clicking buttons

	return (
		<div className="text-editor-container">
			<div className="top-controls controls">
				<EditorButton format="BOLD" onClick={buttonHandlers.bold}>
					Bold
				</EditorButton>
				<EditorButton format="ITALIC">Italic</EditorButton>
				<EditorButton format="UNDERLINE">Underline</EditorButton>
			</div>
			<Editor
				editorState={editorState}
				onChange={setEditorState}
				// handleKeyCommand={handleKeyCommand}
			/>
			<div className="bottom-controls controls">
				<EditorButton onClick={() => save(editorState)} variant="contained">
					Save
				</EditorButton>
				<EditorButton color="secondary" onClick={() => props.close()}>
					discard
				</EditorButton>
			</div>
		</div>
	);

	function selectionHasClass(format) {
		return editorState.getCurrentInlineStyle().has(format);
	}

	function EditorButton(props) {
		function getVariant() {
			if (props.format && selectionHasClass(props.format.toUpperCase())) {
				return "contained";
			}
			return "text";
		}

		function clickHandler() {
			return props.format ? buttonHandlers[props.format.toLowerCase()] : null;
		}

		return (
			<Button
				variant={getVariant()}
				color="primary"
				disableElevation
				onMouseDown={clickHandler()}
				{...props}
			>
				{props.children}
			</Button>
		);
	}
}

export default TextEditor;
