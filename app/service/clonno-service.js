const mongoose = require('mongoose');

const models = require('../models/clonno.model.js');

// Create and Save a new Board
exports.create = (req, res) => {
  // Validate request
  if (!req.body.board) {
    return res.status(400).send({
      message: 'Boards content can not be empty',
    });
  }

  // Create a Card
  const card = new models.Card({
    _id: mongoose.Types.ObjectId(),
  });

  // Create a List
  const list = new models.List({
    _id: mongoose.Types.ObjectId(),
    cards: [card],
  });

  // Create a Board
  const board = new models.Board({
    _id: mongoose.Types.ObjectId(),
    title: req.body.board.title,
    lists: [list],
  });

  // Create a Clonno
  const clonno = new models.ClonnoModel({
    boards: [board],
  });

  // Save Board in the database
  clonno.save()
    .then(data => {
      res.status(200).send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Board.',
      });
    });
};

// Retrieve and return all Board from the database.
exports.findAll = (req, res) => {
  models.ClonnoModel.find()
    .then(boards => {
      res.status(200).send(boards[0]);
    }).catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Boards.',
      });
    });
};

// Update a Board identified by the BoardId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.board) {
    return res.status(400).send({
      message: 'Board content can not be empty',
    });
  }

  // Find Board and update it with the request body
  // Hardcoding board id for now
  models.ClonnoModel.update({
    '_id': '5ce5363c4292fb93d5793dd3',
    'boards._id': req.params.boardId,
  }, 
  {
    '$set': {
      'boards.$.title': req.body.board.title,
      'boards.$.lists': req.body.board.lists,
    },
  })
    .then(board => {
      if (!board) {
        return res.status(404).send({
          message: 'Board not found with id ' + req.params.boardId,
        });
      }
      res.status(200).send(board);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Board not found with id ' + req.params.boardId,
        });                
      }
      return res.status(500).send({
        message: 'Error updating Board with id ' + req.params.boardId,
      });
    });
};

// Delete a board with the specified boardId in the request
exports.delete = (req, res) => {
  models.ClonnoModel.findByIdAndRemove(req.params.boardId)
    .then(board => {
      if (!board) {
        return res.status(404).send({
          message: 'Board not found with id ' + req.params.boardId,
        });
      }
      res.status(200).send({message: 'Board deleted successfully!'});
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Board not found with id ' + req.params.boardId,
        });                
      }
      return res.status(500).send({
        message: 'Could not delete Board with id ' + req.params.boardId,
      });
    });
};