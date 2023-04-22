const router = require('express').Router();
const controller = require("../Controller/user.js")

router.post("/",controller.post)

router.route("/:id")
.get(controller.get)
.patch(controller.patch)
.delete(controller.del)
.all(controller.all)

module.exports = router