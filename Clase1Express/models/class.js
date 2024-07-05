const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
    name: {type:String, rquire:true},
    StarDate: {type: String, require: true},
    endDat:{type: String, require:true},
    level:{type: String, require:true},
}); 

const Class = mongoose.model("Class", classSchema);
module.exports=Class;
