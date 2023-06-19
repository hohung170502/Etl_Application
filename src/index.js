const express = require('express')
const app = express()

const routers = require('./routers')

routers(app)



app.listen(process.env.PORT,() => {
    console.log(`server is running on port http://${process.env.HOST}:${process.env.PORT}`)
})

