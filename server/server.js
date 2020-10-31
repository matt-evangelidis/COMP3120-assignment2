//require statements go here
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

//# routers and similar can go here
const usersRouter = require("./routes/users.js");
const sheetsRouter = require("./routes/sheets");

//# app.use statements
app.use(express.json());
app.use(cors());
app.use("/api/users", usersRouter);
app.use("/api/sheets", sheetsRouter);

app.get("/", (req, res) => {
	res.send("<h1>Hello World, but this time it came from the server</h1>");
});

const PORT = process.env.BACKEND_PORT || process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
