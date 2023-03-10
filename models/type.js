const mongoose =require("mongoose")
const typeSchema=mongoose.Schema({
    type:{ type: String, required: true,unique:true },
    imagetype :{ type: String, required: false }
    })
module.exports=mongoose.model('type',typeSchema)