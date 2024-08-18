const express = require("express");
const path = require('path');

const startServer = (options) => {
  const { port, public_path = 'public'} = options

  const app = express()

  app.use(express.static(public_path)) //contenido estatico disponible

  app.get('*', (req, res) => {
    const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
    console.log(indexPath);
    res.sendFile(indexPath)
  })

  app.listen(port, () => console.log("ejecutando en node"))
}

module.exports = {
  startServer
}