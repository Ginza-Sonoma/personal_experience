var express = require('express')
var bodyParser = require('body-parser')

var index = require('./src/routes/tasks')
var cors = require('cors')

var port = 5000

var app = express()
app.use(cors())

//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api',tasks)
app.listen(port, function(){
  console.log('Server started at' + port);
})
