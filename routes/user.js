const router = require("express").Router()
const users = require("../controllers/users")

router.post("/", users.create)
module.exports = router