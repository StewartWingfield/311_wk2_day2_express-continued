let products = require('../data/products')

const list = (req, res) => {
  
    res.json(products)
  }

  const show = (req, res) => {
    const id = req.params.id

    res.json(products[id - 1])
}

const create = (req, res) => {

    const newProduct = {
      ...req.body,
      _id: products.length + 1
    }
    users.push(newProduct)
  
    res.json(newProduct)
  }

  module.exports = { list, show, create }