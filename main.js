const pres = require('express')
const server = pres()
server.use(pres.json());

server.listen(3000,() => {
  console.log("require server")
})

const pages = [
  {id: 1, about: "Champion"},
  {id: 2, about: "Item"},
  {id: 3, about: "Rune"}]

let userRouter = require("./Router/user.js")
let reportRouter = require("./Router/report.js")

server.use("/user",userRouter)
server.use("/report",reportRouter)