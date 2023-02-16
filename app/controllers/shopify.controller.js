const { default: axios } = require("axios")

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.")
}

exports.userBoard = (req, res) => {
  res.status(200).send("Shopify route")
}
exports.postReturn = (req, res) => {
  res.status(200).send({
    message: "Shopify route",
    body: req.body,
  })
}

exports.getProducts = (req, res) => {
  const options = {
    method: "POST",
    url: "https://testador2000.myshopify.com/admin/api/2023-01/graphql.json",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": "----------------------------------",
    },
    data: {
      query: `{
    products(first: 10) {
      edges {
        node {
          id
          title
          handle
           images(first: 1) {
          edges {
            node {
              id
              altText
              originalSrc
              transformedSrc(maxWidth: 200, maxHeight: 200)
            }
          }
        }
        }
      }
    }
  }    `,
    },
  }

  axios
    .request(options)

    .then((response) => {
      console.log(response.data)

      res.status(200).send(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}
