let contacts = require('../data/contacts')

const list = (req, res) => {
  
    res.json(contacts)
  }

  const show = (req, res) => {
    const id = req.params.id

    res.json(contacts[id - 1])
}

const create = (req, res) => {

    const newContact = {
      ...req.body,
      _id: contacts.length + 1
    }
    contacts.push(newContact)
  
    res.json(newContact)
  }

  module.exports = { list, show, create }