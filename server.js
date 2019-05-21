const express = require('express')
const app = express()
var path = require('path')
const port = process.env.PORT

app.use(express.static('docs'))

app.get('/', (req, res) => res.sendFile('/index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
