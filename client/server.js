var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, 'build')))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
