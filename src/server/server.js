const path = require('path');

const express = require('express')
const app = express()

// app.use(express.static('../../dist/index.html'))

app.use('/static', express.static(path.join(__dirname, '../../dist')));
app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})