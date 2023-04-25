module.exports = (sequelize, Sequelize) => {
  const Patient = sequelize.define("patients", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    cpf: {
      type: Sequelize.INTEGER,
    },
    registration_date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    address: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
    },
  })

  return Patient
}
