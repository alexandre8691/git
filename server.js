const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//paths
const pathPublic = path.join(__dirname,'/public')

app.set('view engine','hbs')

app.get('',(req,res)=>{
    res.render('index',{
        title : 'weather app'
    })
})

app.listen(3000)