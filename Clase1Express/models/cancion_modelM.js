//modelo para MYSQL

var MYSQL = require ('mysql');
Schema = MYSQL.Schema;

var cancion = new MYSQL.Schema({
    nombre: {type:String},
    autor: {type:String},
    interprete: {type:String},
    duracion:{type:Number},
    fotografia:{type:Object},
    letra:{type:String},
    anio:{type:Number},
});

var cancion =mongoose.model ('cancionM',cancion);
module.exports=cancionM;

