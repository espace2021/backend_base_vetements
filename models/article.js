const  mongoose  =require("mongoose")
const Scategorie =require("./scategorie.js");
const articleSchema=mongoose.Schema({
    sku:{ type: String, required: true,unique:true },
    designation:{ type: String, required: true,unique:true },
    marque:{ type: String, required: true },
    price :{ type: Number, required: false },
    variants : [{
        color : String,
        Tsize : [
            {
                size:{ type: String, required: true },
                qte :{ type: Number, required: false },   
            }
        ]
         }],
    imageart:{ type: String, required: false },
    scategorieID: {type:mongoose.Schema.Types.ObjectId,
    ref:Scategorie}
    })
    module.exports=mongoose.model('article',articleSchema)
