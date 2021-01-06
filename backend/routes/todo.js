const router = require('express').Router();

let ToDo = require('../models/todo.model');

router.route('/').get((req, res) => {
  ToDo.find()
  .then(todos => res.json(todos))
  .catch(error => res.status(400).json('Error: '+error));
});

router.route('/add').post((req, res) => {
  console.log(req);
  const title = req.body.title;
  console.log(req.body.dueDate);
  const dueDate = Date.parse(req.body.dueDate);
  const newToDo = new ToDo({title, dueDate});
  newToDo.save()
  .then(() => res.json('ToDo added'))
  .catch(error => {console.log(`Error: ${error}`);res.status(400).json('Error: '+error)});
});

router.route('/:id').get((req, resp) => {
  ToDo.findById(req.params.id)
  .then( todo => resp.json(todo))
  .catch(error => {console.log("Error: "+error);resp.status(400).json("Error: "+error)})
})

router.route('/:id/delete').delete((req, resp) => {
  console.log(req.params);
  ToDo.findByIdAndDelete(req.params.id)
  .then( todo => resp.json("Delete complete"))
  .catch(e => resp.status(400).json("Error: "+e));
})

router.route('/:id/update').post((req, resp) => {
  ToDo.findById(req.params.id)
  .then(todo => {
    todo.title = req.body.title;
    todo.dueDate = Date.parse(req.body.dueDate);

    todo.save()
    .then(() => resp.json("Updated"))
    .catch(e => resp.status(400).json("Error: "+e))
  }).catch(e => resp.status(400).json("Error: "+e))
})

module.exports = router;
