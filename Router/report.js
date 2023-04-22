const rout = require('express').Router();

rout.route("/:num")
.get(req,res) => {res.send("get of report" + req.params.num)}
.patch(req,res) => {res.send("patch of report" + req.params.num)}
.delete(req,res) => {res.send("delete of report" + req.params.num)}

module.exports = rout