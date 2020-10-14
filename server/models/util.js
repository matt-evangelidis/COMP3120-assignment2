const mongoose = require('mongoose')

//manages the connection for Mongoose models, takes a url stored in the environment variable
const mongooseConnect = (url) => {
    console.log("Connecting to MONGODB, database:", process.env.DATABASE)
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })
}

module.exports = {mongooseConnect}