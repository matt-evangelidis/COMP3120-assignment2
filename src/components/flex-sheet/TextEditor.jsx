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

/**
 * The text editor used to edit the content of sheets
 * @prop {function} save - The function to save the contents of the editor to the note currently being edited
 * @prop {Object} editingNote - Data about the note currently being edited
 * @prop {function} close - The function to close the editor
 */
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

	/**
	 * Save the current editor contents to the note being edited
	 */
	function saveToNote() {
		props.save(stateToHTML(editorState.getCurrentContent()));
		props.close();
	}

	/**
	 * Handle keyboard shortcuts in the editor
	 * @param {string} command - The command to be executed
	 * @returns {string} Describes if the command was successfully handled or not
	 */
	function handleKeyCommand(command) {
		console.log(command);
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			setEditorState(newState);
			return "handled";
		}
		return "not-handled";
	}

	/**
	 * Apply a specified style/format to selected text
	 * @param {string} style - The name of the style/format to apply
	 */
	function applyStyle(style) {
		setEditorState(
			RichUtils.toggleInlineStyle(editorState, style.toUpperCase())
		);
		//TODO: Check if passed style is a valid style
	}

	return (
		<div className="text-editor-container">
			<div className="top-controls controls">
				<EditorButton format="BOLD">Bold</EditorButton>
				<EditorButton format="ITALIC">Italic</EditorButton>
				<EditorButton format="UNDERLINE">Underline</EditorButton>
			</div>
			<Editor
				editorState={editorState}
				onChange={setEditorState}
				handleKeyCommand={handleKeyCommand}
			/>
			<div className="bottom-controls controls">
				<EditorButton onClick={saveToNote} variant="contained">
					Save
				</EditorButton>
				{/*FIXME: 'Save' button does not close the editor on the first click and has to be clicked a second time */}
				<EditorButton color="secondary" onClick={() => props.close()}>
					discard
				</EditorButton>
				{/* TODO: Replace use of "secondary" colour with a specified error colour */}
			</div>
		</div>
	);
	//TODO: Somehow represent the width/height of the card being edited
	//TODO: Allow user to have the note be automatically resized to be able to show its content

	/**
	 * Checks if currently selected text is affected by the passed format
	 * @param {string} format - The name of the format to check for the presence of
	 * @returns {boolean} Whether or not the currently selected text has the format
	 */
	function selectionHasFormat(format) {
		return editorState.getCurrentInlineStyle().has(format.toUpperCase());
		//TODO: Check if part but not of all selection has a format
	}

	/**
	 * A component for buttons used in the editor
	 * @prop {string} [format] - The name of the format the button will apply (if that is its purpose). Used to determine variant of root 'Button' as well as the 'mouseDown' behaviour
	 * @prop {*} * - All props are passed to the root 'Button' element
	 */
	function EditorButton(props) {
		/**
		 * Get the variant that should be used
		 * @returns {string} "contained" if button applies a format and the currently selected text contains that format, otherwise returns "text"
		 */
		function getVariant() {
			if (props.format && selectionHasFormat(props.format.toUpperCase())) {
				return "contained";
			}
			return "text";
		}

		/**
		 * Determine what 'mouseDown' handler should be used depending on the passed 'format' prop
		 * @returns {function} The function to be run when this component is clicked
		 */
		function clickHandler() {
			return props.format
				? (e) => {
						e.preventDefault();
						applyStyle(props.format.toUpperCase());
				  }
				: null;
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
