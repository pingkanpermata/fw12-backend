const express = require('express')
const postgree = require('./src/helpers/db.helper')

const app = express()
app.use(express.json()) //untuk parsing json
app.use(express.urlencoded({extended:true})) //untuk form encode

app.use('/', require('./src/routes'))

app.get('/', (req, res)=> { //membuat info bahwa backend kita bisa diakses atau tidak
    return res.status(200).json({
        success: true,
        message: "Backend is running well"
    })
})

//membuka port app
app.listen(8888, ()=> {
    console.log('App listening on port 8888')
})
