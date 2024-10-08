const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if(!token)
  {
    return res.json({respuesta: "no hay token"});
  }
  jwt.verify(token, "clavePrivada", (err, decoded) => {
    if(err)
    {
      return res.status(401).send({respuesta: "error en el token"})
    }
    req.userId = decoded.indexOf;
    next();
  })
}


module.exports = {verificarToken};