const router = require("express").Router()
const tasks = require("../controllers/tasks")

router.post("/", tasks.create)
router.get("/:username/all", tasks.findAll)
router.post("/update", tasks.update)

module.exports = router