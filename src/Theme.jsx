import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#86C6FD",
			main: "#1E96FC",
			dark: "#0257A1",
		},
		secondary: {
			light: "#ff6e40",
			main: "#ff3d00",
			dark: "#bf360c",
		},
		text: {
			primary: "#000000dd",
		},
	},
	variables: {
		navbarHeight: 82,
	},
});

export default theme;
