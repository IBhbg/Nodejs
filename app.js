const express = require('express')
const app = express()
var dogR = require('./route')
const port =8007

app.get('/',(req, res)=>{
    res.send('Hello from Ivan')
})
app.use('/dog',dogR)

app.listen(port)
