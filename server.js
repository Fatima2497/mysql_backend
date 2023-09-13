const express = require('express')
const app = express()

const port = process.env.PORT || 5000

const dbcon = require("./db/dbConn")
const cors = require("cors")
const bodyParser = require("body-parser")

const routes = require('./router/empRouter')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.get("/", (req,res)=> {
    res.send("Hello from server")
}) 

app.use('/api',routes)

app.listen(port, console.log(`server is running on ${port}`))