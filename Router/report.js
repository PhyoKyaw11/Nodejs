const rout = require('express').Router();
const controller = require("../Controller/report.js")

rout.all("/",controller.showError)

rout.route("/:id")
.get(controller.get)
.post(controller.add)
.patch(controller.update)
.delete(controller.del)

module.exports = rout