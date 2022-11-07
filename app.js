const express = require('express')
const app = express()
const port =5500

app.get('/',(req, res)=>{
    res.send('Hello from Ivan')
})
app.get('/api/users',(req, res)=>{
    res.send('its api')
})

app.listen(port, ()=> {
    console.log('it is listning to :${port}')
})