"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("patients", "phone", {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.changeColumn("patients", "cpf", {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.changeColumn("patients", "address", {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.changeColumn("patients", "price", {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("patients", "phone", {
      type: Sequelize.STRING,
      allowNull: true,
    })

    await queryInterface.changeColumn("patients", "cpf", {
      type: Sequelize.STRING,
      allowNull: true,
    })
    await queryInterface.changeColumn("patients", "address", {
      type: Sequelize.STRING,
      allowNull: true,
    })
    await queryInterface.changeColumn("patients", "price", {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
    })
  },
}

