const  jwt =require("jsonwebtoken")

export const auth=async(req,res,next)=>{
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.sendStatus(401);
}
jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
  if (err) {
    return res.sendStatus(401);
  }
  req.user = user;
  console.log(token)
  next();
});
}

