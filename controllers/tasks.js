const db = require("../models")
const Task = db.tasks
const Op = db.Sequelize.Op;

// Create and Save a new Task
exports.create = (req, res) => {

  const {title, description,category, username} = req.body
  // Validate request
  if (!title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Task
  const task = {
    title,
    description,
    category,
    username
  };

  // Save Task in the database
  Task.create(task)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Task."
      });
    });
};

// Retrieve all Task from the database.
exports.findAll = (req, res) => {
  Task.findAll({where: {username: req.params.username},order: [['createdAt', "DESC"]]})
    .then(data=>{
      res.send(data)
    })
    .catch(err=>{
      res.status(500).send({
        message:  err.message || "Cannot retrieve the tasks"
      })
    })
};

// Find a single Task with an id
exports.findOne = (req, res) => {
  
};

// Update a Task by the id in the request
exports.update = (req, res) => {
  const {id} = req.body;
  
  Task.update(req.body, {
    where: { id: id }
  })
    .then(async num => {
      if (num == 1) {
        const updatedTask = await Task.findByPk(id)
        res.send({
          task: updatedTask,
          message: "Task was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Task with id=${id}. Maybe Task was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Task with id=" + id
      });
    });
};

