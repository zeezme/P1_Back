const { authJwt } = require("../middleware")
const controller = require("../controllers/patient.controller")
const verifyRegex = require("../middleware/verifyRegex")

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    next()
  })

  app.post("/api/patient/get", [authJwt.verifyToken], controller.get)
  app.post(
    "/api/patient/create",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin, verifyRegex.all],
    controller.create
  )
}
