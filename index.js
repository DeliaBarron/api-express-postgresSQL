const express = require('express')//importamos libreria express. lo busca en node_modules con el require()
const app = express()//inicializamos la libreria express. llamo a lo que me regresa el require de express
const router= require('./routes') //importamos las routes
//Middleware
app.use(express.json())//permite la comunicacion a traves de JSON's
app.use(express.urlencoded({extended: false}))//Si vamos a subir pdf, imagenes o archivos en general se pone true. le decimos que no va a usar este tipo de archivos para asi evitar retraso en tiempo 

//usamos las rutas
app.use(router)

app.listen(3000, (error)=>{
    error ? console.log(error) : console.log('server running')
})