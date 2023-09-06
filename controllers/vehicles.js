let vehicles = require('../data/vehicles')

const list = (req, res) => {
  
    res.json(vehicles)
  }

  const show = (req, res) => {
    const id = req.params.id

    res.json(vehicles[id - 1])
}

const create = (req, res) => {

    const newVehicle = {
      ...req.body,
      _id: vehicles.length + 1
    }
    users.push(newVehicle)
  
    res.json(newVehicle)
  }

  module.exports = { list, show, create }