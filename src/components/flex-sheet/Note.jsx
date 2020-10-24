import React, { useState, useEffect } from "react";

import GridItem from "react-grid-layout";

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

	return <Card style={style}>content</Card>;

	// return (
	// 	<GridItem {...props}>
	// 		<Card style={style}>content</Card>
	// 	</GridItem>
	// );
}

export default Note;
