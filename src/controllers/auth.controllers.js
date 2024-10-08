const authCtrl = {};

authCtrl.postLogin = (req, res) => {
  const {usuario, clave} = req.body;
  res.json({usuario, clave})
}

authCtrl.postRegister = (req, res) => {
  const {email, usuario, clave} = req.body;
  res.json({email, usuario, clave})
}

module.exports = authCtrl;