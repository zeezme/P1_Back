const { verifySignUp } = require("../middleware")
const controller = require("../controllers/auth.controller")

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
      "Access-Control-Allow-Origin",
      `http://${process.env.CLIENT_ADDRESS}:${process.env.CLIENT_PORT}`,
      "Access-Control-Allow-Credentials",
      true
    )
    next()
  })

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  )

  app.post("/api/auth/signin", controller.signin)
}
