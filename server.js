const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

const app = express()
console.log(`http://${process.env.CLIENT_ADDRESS}:${process.env.CLIENT_PORT}`)
var corsOptions = {
  origin: `http://${process.env.CLIENT_ADDRESS}:${process.env.CLIENT_PORT}`,
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// database
const db = require("./app/models")
const Role = db.role

db.sequelize.sync()

// force: true will drop the table if it already exists

/* db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Database with { force: true }")
  initial()
}) */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Running." })
})

// routes
require("./app/routes/auth.routes")(app)
require("./app/routes/user.routes")(app)
require("./app/routes/shopify.routes")(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

function initial() {
  Role.create({
    id: 1,
    name: "user",
  })

  Role.create({
    id: 2,
    name: "moderator",
  })

  Role.create({
    id: 3,
    name: "admin",
  })
}
