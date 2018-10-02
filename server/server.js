const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.get('/', (req, res) => res.json(["Tony","Lisa","Michael","Ginger","Food"]))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))