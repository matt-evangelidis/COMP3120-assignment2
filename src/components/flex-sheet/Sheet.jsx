import React, { useState, useEffect } from "react";

import GridLayout, { WidthProvider } from "react-grid-layout";

import Note from "./Note";

// const GridEl = WidthProvider(GridLayout);

function Sheet(props) {
	// const [state, setState] = useState('');

	// useEffect(() => {
	// 	return () => {

	//     }
	// }, []);

	return (
		<GridLayout
			cols={12}
			rowHeight={30}
			width={window.screen.width}
			verticalCompact={false}
			resizeHandle={<div></div>}
		>
			<div key={1}>
				<Note></Note>
			</div>
			<div key={2}>
				<Note></Note>
			</div>
			<div key={3}>
				<Note></Note>
			</div>

			{/* <Note key={1} /> */}
		</GridLayout>

		//? I trued moving the 'div' wrappers into the 'Note' component but that caused the resize handles to not show up for some reason
	);
}

export default Sheet;
