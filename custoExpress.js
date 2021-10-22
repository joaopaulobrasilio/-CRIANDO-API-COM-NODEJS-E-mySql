
// exportando módulo

const express  = require ('express')
const consign = require ('consign')
const bodyParser = require('body-parser')

module.exports =() => {
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// app.use(express.urlencoded({extended: true}))
// app.use(express.json())

// configurando app
consign()
.include('controllers')
.into(app)
return app

}