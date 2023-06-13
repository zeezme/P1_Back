const express = require("express")
const router = express.Router()

//Import das rotas
const authRoutes = require("./auth.routes")
const userRoutes = require("./user.routes")
const patientRoutes = require("./patient.routes")

//Rota padrão
router.get("/", async (req, res) => {
  res.send("OK")
})

//Rotas
authRoutes(router)
userRoutes(router)
patientRoutes(router)

//Export do Router
module.exports = router
