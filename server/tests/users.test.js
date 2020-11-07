const mongoose = require("mongoose");

const supertest = require("supertest");

let app;
let api;

beforeEach(() => {
	app = require("../app");
	//? Server needs to factored to have an 'app.js' file, which contains all the code normally contained in 'server.js', except for the 'PORT' variable and 'app.listen()' call. The server.js file just has a 'require' line to import 'app.js' and has the 'PORT' var and the 'app.listen()' call
	//? This is because Jest runs its own equivalent to 'app.listen', so if you import the js file with the '.listen' call it confuses jest. Most of the time jest will still work but it has performance downsides and you will usually get an error where jest wont automatically close at the end which will break anything that does automated tests like heroku.
	api = supertest(app);
});
afterEach((done) => {
	delete require.cache[require.resolve("../app")];
	//? We 'un-import' the 'app.js' file, then in the 'beforeEach()' method above, we re-import it. By 'un-importing' and then 're-importing' we are resetting the server, which can prevent errors that may otherwise occur in jest
	done();
	//? 'done()' is a function provided by jest that signals that the current test is over
});

//# Close mongoose connection at end of tests
afterAll(() => {
	mongoose.connection.close();
});

//# Constant Test Data
const devtestCredentials = {
	username: "test",
	password: "password",
};

test("can login to devtest user account", async (done) => {
	await api
		.post("/api/users/login")
		.send(devtestCredentials)
		.expect("Content-Type", /json/)
		.expect(200);
	done();
});

test("devtest login with incorrect password fails", async (done) => {
	await api
		.post("/api/users/login")
		.send({
			username: devtestCredentials.username,
			password: `!${devtestCredentials.password}`,
		})
		.expect("Content-Type", /json/)
		.expect(400);
	done();
});

test("login with non-existant username fails", async (done) => {
	await api
		.post("/api/users/login")
		.send({
			username: "-1",
			password: "-1",
		})
		.expect("Content-Type", /json/)
		.expect(400);
	done();
	//TODO: If this is ever fully deployed, need to generate a password that is definitely not already taken
});

test("login with missing employee_number field fails", async (done) => {
	await api
		.post("/api/users/login")
		.send({
			password: devtestCredentials.password,
		})
		.expect("Content-Type", /json/)
		.expect(400);
	done();
});

test("login with missing password field fails", async (done) => {
	await api
		.post("/api/users/login")
		.send({
			username: devtestCredentials.username,
		})
		.expect("Content-Type", /json/)
		.expect(400);
	done();
});
