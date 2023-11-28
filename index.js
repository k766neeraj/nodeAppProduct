const express = require('express')

const app = express()
const mongooseConnect = require('./db')
const PORT = process.env.PORT || 3000

mongooseConnect()
app.use(express.json())
app.use('/api/product',require('./routers/route'))



app.listen(PORT,()=>{
    console.log(`Backend Server started successfully at http://localhost:${PORT}`)
})