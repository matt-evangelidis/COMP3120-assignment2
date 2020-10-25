import React, { useState, useEffect } from "react";

import Card from "@material-ui/core/Card";

function Note(props) {
	// const [state, setState] = useState('');

	// useEffect(() => {
	// 	return () => {

	//     }
	// }, []);

	const style = {
		height: "100%",
		width: "100%",
	};

	return (
		<Card style={style} {...props}>
			content
		</Card>
	);

	// return (
	// 	<div key={props.key}>
	// 		<Card style={style}>content</Card>
	// 	</div>
	// );
}

export default Note;
