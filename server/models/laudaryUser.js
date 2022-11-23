const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName:{type:String,required:true},
    email: { type: String, required:true , unique:true },
    phone: { type: String, required:true , unique:true },
    password: { type: String, required:true},
    address: {
        state: { type: String, required:true },
        district: { type: String, required:true },
        area: { type: String, required:true },
        pincode: { type: String, required:true }
    },
    date:{type:Date,default:Date.now().toString().split("T")[0]}

})

const User = mongoose.model("User",userSchema)

module.exports = User