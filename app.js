require('dotenv').config()

const express = require('express')
const app = express()
const connectDB = require('./db/connect')

const notFoundMiddleware = require('./middlewares/not-found')
const errorMiddleware = require('./middlewares/error-handler')

app.use(express.json())

// routes

app.get('/', (req, res) =>{
    res.send('<h1>Store Api</h1><a href="/api/v1/products">Products Route</a>')
})

// products routes


app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port = process.env.PORT || 5000
// app.listen(port, console.log(`Server is listening on port ${port}...`))

const startServer = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch(error){
        console.log(error);
    }
}

startServer()