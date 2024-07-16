const express = require("express")

const app = express()

// app.use((req,res,next)=>{
//     console.log('first middleware')
//     next()
// })

// app.use((req,res,next)=>{
//     console.log('second middleware');
//      res.send('<h1>resposta enviada</h1>')
// })

app.use('/users',(req,res,next)=>{
    console.log('middleware user');
    res.send("<h1>Users middleware")
})

app.use("/",(req,res,next)=>{
    console.log('middleware with any /');
    res.send("<h1>Middleware with /</h1>")
})


app.listen(3000)