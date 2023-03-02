const { authJwt } = require("../middleware")
const controller = require("../controllers/shopify.controller")

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    next()
  })

  app.get("/api/shopify", [authJwt.verifyToken], controller.userBoard)

  app.post("/api/shopify/return", [authJwt.verifyToken], controller.postReturn)

  app.get("/api/shopify/products", controller.getProducts)
}
