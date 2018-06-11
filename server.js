const express = require('express')
const app = express()
const config = require('./config')
const routes = require('./routes')



//midleware init
app.use(express.json())
app.use('/', require('./routes'))
app.use(express.static('dist'))

app.listen(config.port, _ => {
  console.log('listening on port', config.port )
})