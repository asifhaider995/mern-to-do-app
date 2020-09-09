const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {type: String, required: true},
  dueDate: {type: Date, required: false}
}, {
  timestamps: true,
});

const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;
