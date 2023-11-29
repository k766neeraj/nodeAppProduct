const express = require('express')

const app = express()
const mongooseConnect = require('./db')
const PORT = process.env.PORT || 3000
// call the method to connect the database
mongooseConnect()

app.use(express.json())

// set a middleware for the api calls
app.use('/api/product',require('./routers/route'))


// starting server at given PORT
app.listen(PORT,()=>{
    console.log(`Backend Server started successfully at http://localhost:${PORT}`)
})