module.exports = (sequelize, Sequelize) => {
  const Patient = sequelize.define("patients", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    registration_date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
  })

  return Patient
}
