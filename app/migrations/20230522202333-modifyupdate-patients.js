"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("patients", "parent_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("patients", "parent_id")
  },
}

