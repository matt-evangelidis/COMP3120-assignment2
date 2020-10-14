require('dotenv').config()
const mongoose = require('mongoose')
const util = require('./util')
const User = require('./user')

if (process.argv.length < 4) {
    console.log('Please provide the username and password as an argument: userTest.js <username> <password>')
    process.exit(1)
  }

const username = process.argv[2]
const password = process.argv[3]

const url = process.env.MONGODB_URI
util.mongooseConnect(url)

const user = new User({
  username: username,
  password: password
})

user.save().then(result => {
  console.log('user saved!')
  mongoose.connection.close()
})