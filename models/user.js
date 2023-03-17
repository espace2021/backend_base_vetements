const mongoose =require("mongoose")
const userSchema = mongoose.Schema({
    nom:{
        type:String,
        required:"nom is required"
    } ,
    role: {
        type: String,
        required: true,
        default: 'Admin',
        },
    email:{
        type:String,
        required:"Email is required",
        unique:true
    } ,
    password:{
        type:String,
        required:"password is required"
    } ,
    avatar :{

        type: String,

        required: false

        }    ,
},
{
    timestamps: true,
},
);
module.exports=mongoose.model('User',userSchema)

