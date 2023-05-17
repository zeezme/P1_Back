const { development } = require("./app/config/config.json")

const Sequelize = require("sequelize")

const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: development.dialect,
  }
)

module.exports = sequelize
