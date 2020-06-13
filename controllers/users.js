const db = require("../models")
const User = db.users

exports.create = (req, res) => {

    const {username, password} = req.body
    // Validate request
    if (!username || !password) {
      res.status(400).send({
        message: "Username can not be empty!"
      });
      return;
    }
    // Check if user is already present
    User.findAll({where: {username, password}})
    .then(data => {
        // return res.send(data);
        if(data.length==0)  {
            // Create a User
        const user = {
            username,
            password
        };
        
        // Save User in the database
        User.create(user)
            .then(data => {
            res.send([data]);
            })
            .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Task."
            });
        });
        }else {
            return res.send(data);
        }
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Task."
        });
    });
    
};