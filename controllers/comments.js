let comments = require('../data/comments')

const list = (req, res) => {

    res.json(comments)
  }

const show = (req, res) => {
    const id = req.params.id

    res.json(comments[id - 1])
}

const create = (req, res) => {

    const newComment = {
      ...req.body,
      _id: comments.length + 1
    }
    comments.push(newComment)
  
    res.json(newComment)
  }

  module.exports = { list, show, create }