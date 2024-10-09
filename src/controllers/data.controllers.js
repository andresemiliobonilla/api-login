const dataCtrl = {};

dataCtrl.getData = (req, res) => {
  res.send({respuesta: "token correcto, Se pueden ver Datos"})
}

module.exports = dataCtrl;