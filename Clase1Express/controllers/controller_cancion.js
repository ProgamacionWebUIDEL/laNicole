var cancion = require('../models/cancion_models'),
            express= require('express'),
            router =express.Router();


router.post('/crear',(req,res)=>{
    var body=req.body;
    console.log("llegó hasta aquí")
    cancion.insertMany({
    nombre:body.nombre,
    autor:body.autor,
    interprete:body.interprete,
    duracion:body.duracion,
    fotografia:body.fotografia,
    letra:body.letra,
    anio:body.anio,
    },).then(function() {
        res.status(200).json("Datos guardados")
        console.log("Succesfully saved defult items to BD");
    })
    .catch(function(err){
        console.log(err);
        throw err;
    });;
});

module.exports=router;