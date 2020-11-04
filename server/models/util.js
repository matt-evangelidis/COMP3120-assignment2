const mongoose = require('mongoose')

//manages the connection for Mongoose models, takes a url stored in the environment variable
const mongooseConnect = (url, model) => {
    console.log(model + " connecting to MONGODB, database:", process.env.DATABASE)
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log(model + " connected to MongoDB");
  })
  .catch((error) => {
    console.log(model + " error connecting to MongoDB:", error.message);
  })
};

module.exports = {mongooseConnect}