const Sequelize = require("sequelize")

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_ADDRESS}:${process.env.DB_PORT}/${process.env.DB_NAME}`
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require("../models/user.model.js")(sequelize, Sequelize)
db.role = require("../models/role.model.js")(sequelize, Sequelize)
db.patient = require("../models/patient.model.js")(sequelize, Sequelize)

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
