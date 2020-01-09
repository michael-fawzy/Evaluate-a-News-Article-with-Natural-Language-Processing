var path = require('path')
const express = require('express')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')

// Require the Aylien npm package

var aylien = require("aylien_textapi");

// set aylien API credentias
var textapi = new aylien({
  application_id: '91172e14',
  application_key: '5b16306c57fca9f944e763c40369e93e'
});

const app = express()

app.use(express.static('dist'))
app.use(cors())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

