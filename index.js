const express = require("express");
const bodyParser = require("body-parser");
let { comments } = require('./data/comments')
let { contacts } = require('./data/contacts')
let { comments } = require('./data/comments')
let { products } = require('./data/products')

app.use

const app = express();

const port = process.env.PORT || 4001;

app.use(express.json())

app.use(express.static('public'))

app.get('/contacts/:id'), (req, res) => {
    const id = req.params.id

    res.json(contacts[id - 1])
}

app.get('/vehicles:/id'), (req, res) => {
    const id = req.params.id

    res.json(vehicles[id - 1])
}

app.get('/comments:/id'), (req, res) => {
    const id = req.params.id

    res.json(comments[id - 1])
}

app.get('/products:/id'), (req, res) => {
    const id = req.params.id

    res.json(products[id - 1])
}


//posts

app.post('/contacts', (req, res) => {

    const newContact = {
      ...req.body,
      _id: contacts.length + 1
    }
    users.push(newContact)
  
    res.json(newContact)
  })

app.post('/vehicles', (req, res) => {

    const newVehicle = {
      ...req.body,
      _id: vehicles.length + 1
    }
    users.push(newVehicle)
  
    res.json(newVehicle)
  })

app.post('/comments', (req, res) => {

    const newComment = {
      ...req.body,
      _id: comments.length + 1
    }
    users.push(newComment)
  
    res.json(newComment)
  })

app.post('/products', (req, res) => {

    const newProduct = {
      ...req.body,
      _id: products.length + 1
    }
    users.push(newProduct)
  
    res.json(newProduct)
  })

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
