const express = require('express')
const app =express()
const port =3000

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index',{user:'Aditi'})
})
app.get('/about',(req,res)=>{
    res.render('about',{batch:'Full stack'})
})


app.listen(port)






























