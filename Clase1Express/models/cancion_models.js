var mongoose=require ('mongoose');
schema=mongoose.Schema;

var cancionSchema=new mongoose.Schema({
    nombre: {type:String},
    autor: {type:String},
    interprete: {type:String},
    duracion:{type:Number},
    fotografia:{type:Object},
    letra:{type:String},
    anio:{type:Number},
});

var cancion =mongoose.model ('cancion',cancionSchema);
module.exports=cancion;
