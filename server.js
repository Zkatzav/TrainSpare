const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const api = require('./src/server/routes/api')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/TrainSpare', { useNewUrlParser: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use( '/', api )

//////////////////////////////////////

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
//////////////////////////////////////

const port = 3000
app.listen(port, () => console.log(`app listen on port ${port}`))