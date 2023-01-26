const config = require("../config/db.config.js")

const Sequelize = require("sequelize")
const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/p1store"
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require("../models/user.model.js")(sequelize, Sequelize)
db.role = require("../models/role.model.js")(sequelize, Sequelize)

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
})
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
})

db.ROLES = ["user", "admin", "moderator"]

module.exports = db

