const mongoose = require('mongoose');

const cardSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    comments: [String],
  }
);

const listSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    cards: [cardSchema],
  }
);

const boardSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    lists: [listSchema],
  }
);

const clonnoSchema = mongoose.Schema(
  {
    boards: [boardSchema],
  }
);

module.exports = {
  ClonnoModel: mongoose.model('Clonno', clonnoSchema),
  Board: mongoose.model('Board', boardSchema),
  List: mongoose.model('List', listSchema),
  Card: mongoose.model('Card', cardSchema),
}