const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

let messages = []

app.get('/api/messages', (req,res)=>{
    res.json(messages)
})

app.post('/api/messages',(req,res)=>{
    const msg = req.body.message
    messages.push(msg)
    res.json({status:"saved"})
})

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})
