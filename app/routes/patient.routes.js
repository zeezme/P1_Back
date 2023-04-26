const { authJwt } = require("../middleware")
const controller = require("../controllers/patient.controller")

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    next()
  })

  app.get(
    "/api/patient/get",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.get
  )
  app.post(
    "/api/patient/create",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.create
  )
}
