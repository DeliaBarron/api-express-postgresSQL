// const express= require('express')
// const router= express.Router()

//Lo mismo pero deconstruido:
const {Router} = require('express')
const router= Router()

router.get('/users', function(req, res){
    console.log(req.body)
    res.json({message:'Hola soy la respuesta'})
})
module.exports=router