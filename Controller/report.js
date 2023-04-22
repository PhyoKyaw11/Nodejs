const get = async (req,res,next) => {
  res.json({sms: "the get"})
}
const add = async (req,res,next) => {
  res.json({sms : "the post", result : req.body})
}
const update = async (req,res,next) => {
  res.json({sms : "the patch", result : req.body})
}
const del = async (req,res,next) => {
  res.json({sms : "the delete", id : req.params.id})
}
const showError = async (req,res,next) => {
  res.json({sms : "the all"})
}

module.exports = {
  get,
  add,
  update,
  del,
  showError
}