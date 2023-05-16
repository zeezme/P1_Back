const db = require("../models")
const Patient = db.patient

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Nome não pode ser vázio!" })
    return
  }
  if (!req.body.phone) {
    res.status(400).send({ message: "Telefone não pode ser vázio!" })
    return
  }
  if (!req.body.cpf) {
    res.status(400).send({ message: "CPF não pode ser vázio!" })
    return
  }
  if (!req.body.address) {
    res.status(400).send({ message: "Endereço não pode ser vázio!" })
    return
  }
  if (!req.body.price) {
    res.status(400).send({ message: "Preço não pode ser vázio!" })
    return
  }

  Patient.findOne({
    where: {
      cpf: req.body.cpf,
    },
  }).then((patient) => {
    if (patient) {
      res.status(400).send({ message: "Paciente já cadastrado!" })
      return
    } else {
      Patient.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        cpf: req.body.cpf,
        address: req.body.address,
        price: req.body.price,
      })
        .then((patient) => {
          res
            .status(200)
            .json({ message: "Sucesso ao criar o paciente!", patient })
        })
        .catch((err) => {
          res.status(500).send({ message: err.message })
        })
    }
  })
}
exports.get = (req, res) => {
  res.status(200).send("Get test")
}
