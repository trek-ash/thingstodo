const db = require("../models")
const User = db.users

exports.create = (req, res) => {

    const {username} = req.body
    // Validate request
    if (!username) {
      res.status(400).send({
        message: "Username can not be empty!"
      });
      return;
    }
    // Create a User
    const user = {
      username
    };
  
    // Save User in the database
    User.create(user)
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
  