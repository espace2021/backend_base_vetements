const mongoose =require("mongoose")
const Type =require("./type.js");
const categorieSchema=mongoose.Schema({
    nomcategorie:{ type: String, required: true,unique:true },
    imagecategorie :{ type: String, required: false },
    typeID:{type:mongoose.Schema.Types.ObjectId,
        ref:Type}
    })
module.exports=mongoose.model('categorie',categorieSchema)