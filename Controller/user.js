const post = async(req,res,next) => {
  res.send("the post")
}
const get = async(req,res,next) => {
  res.send("the get")
}
const patch = async(req,res,next) => {
  res.send("the patch")
}
const del = async(req,res,next) => {
  res.send("the delete")
}
const all = async(req,res,next) => {
  res.send("the all")
}

module.exports= {
  post,
  get,
  patch,
  del,
  all
}