const express = require('express')
const app = express()
var path = require('path')
const port = process.env.PORT

app.use(express.static('/'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
