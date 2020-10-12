//require statements go here
const express = require('express')
const cors = require('cors')
const app = express()

//routers and similar can go here

//app.use statements
//app.use(cors())
//app.use(express.json)

app.get('/',(req, res) => {
    res.send('<h1>Hello World, but this time it came from the server<h1/>')
})

const PORT = process.env.PORT || 3001
console.log(PORT)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })