const db = require("../models/index.js")

all = (req, res, next) => {
  const cpfRegex = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/
  const mailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const phoneRegex =
    /^(\+\d{1,3})?[-.\s]?\(?\d{2,3}\)?[-.\s]?\d{3,4}[-.\s]?\d{4}$/

  let isValid = true

  if (!cpfRegex.test(req.body.cpf)) {
    res.status(400).send({ message: "CPF inválido!" })
    isValid = false
  }

  if (!mailRegex.test(req.body.email)) {
    res.status(400).send({ message: "Email inválido!" })
    isValid = false
  }

  if (!phoneRegex.test(req.body.phone)) {
    res.status(400).send({ message: "Telefone inválido!" })
    isValid = false
  }

  if (isValid) {
    next()
  }
}

const verifyRegex = {
  all,
}
module.exports = verifyRegex
