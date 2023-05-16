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
//replace url with shopify info
exports.getProducts = (req, res) => {
  const options = {
    method: "GET",
    url: "https://fakestoreapi.com/products/",
    headers: {
      "Content-Type": "application/json",
      /* "X-Shopify-Access-Token": "----------------------------------", */
    } /* ,
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
    }, */,
  }

  axios
    .request(options)

    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}
