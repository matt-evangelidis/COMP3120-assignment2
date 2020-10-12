import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#ff6e40",
			main: "#ff3d00",
			dark: "#bf360c",
		},
		secondary: {
			light: "#86C6FD",
			main: "#1E96FC",
			dark: "#0257A1",
		},
		text: {
			primary: "#000000dd",
		},
	},
});

export default theme;
