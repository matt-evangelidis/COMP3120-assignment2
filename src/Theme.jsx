import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#ff6e40",
			main: "#ff3d00",
			dark: "#bf360c",
		},
		secondary: {
			light: "#3e3e3d",
			main: "#242423",
			dark: "#151514",
		},
		text: {
			primary: "#000000dd",
			secondary: "#ffffffdd",
		},
	},
});

export default theme;
