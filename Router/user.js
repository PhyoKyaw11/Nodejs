const router = require('express').Router();

router.route("/:id")
.get((req,res)=>{res.send("get of user")})
.patch((req,res)=>{res.send("patch of user" + req.params.id)})
.delete((req,res)=>{res.send("delete of user" + req.params.id)})

module.exports = router