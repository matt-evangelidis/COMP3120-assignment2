//#Router for handling all requets to '/api/sheets'

const router = require("express").Router();
//const User = require("../models/user");
const Sheet = require("../models/sheet");
const Note = require("../models/note");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateLoginInput = require("../validation/login");


//#Get all sheets
router.route("/").get(async (req, res) => {
    console.log("Received request to fetch all sheets");

    const sheets = await Sheet.find({}).populate('notes');
    res.json(sheets);
});

//#Get sheet by id
router.route("/:id").get(async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
    console.log("Recieved request to fetch sheet", id);

    let sheet = await Sheet.findById(id);
    let ids = sheet.notes;
    sheet.notes = await Note.find().where('_id').in(ids);

    res.json(sheet);
});

//#Post sheet
router.route("/:id").post(async (req, res) => {
    //id must be a user id
});

module.exports = router;