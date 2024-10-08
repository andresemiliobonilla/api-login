const User = require("../models/user.models")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authCtrl = {};

authCtrl.postLogin = async (req, res) => {
  const {usuario, clave} = req.body;
  const verificarUsuario = await User.findOne({usuario});
  if(!verificarUsuario)
  {
    return res.status(500).send({message: "el usuario no existe"})
  }
  const verificarClave = await bcrypt.compare(clave, verificarUsuario.clave)
  if(!verificarClave)
  {
    return res.status(500).send({message: "la clave es incorrecta"})
  }
  const token = jwt.sign({id: verificarUsuario.id, user: verificarUsuario.usuario}, "clavePrivada", {
    expiresIn: 86400 //24hs
  })
  
  res.status(200).send({
    id: verificarUsuario.id,
    usuario: verificarUsuario.usuario,
    email: verificarUsuario.email,
    miToken: token
  })
  // res.json({usuario, clave})
}

authCtrl.postRegister = async(req, res) => {
  const {email, usuario, clave} = req.body;

  const verificarUsuario = await User.findOne({usuario})
  if(verificarUsuario)
  {
    return res.status(400).send({respuesta: "usuario ya existe"});
  }
  const verificarEmail = await User.findOne({email})
  if(verificarEmail)
  {
    return res.status(400).send({respuesta: "email ya registrado"});
  }
  const stl = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(clave, stl);
  const newUser = new User({
    email,
    usuario,
    clave: hash
  });

  newUser.save()
  .then(() => {
    res.send({ respuesta: "Usuario registrado correctamente" });
  })
  .catch(err => {
    console.error(err); // Para que puedas ver el error en la consola
    res.status(500).send({ respuesta: "Error al guardar", error: err.message });
  });

}

module.exports = authCtrl;