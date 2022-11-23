const router = require("express").Router()
const User = require("../models/laudaryUser")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/login",async(req,res)=>{
    console.log(req.body)
    try {
       const {userName,password} = req.body

       const user = await User.findOne({$or:[{email:userName},{phone:userName}]})
       console.log(user)
       if(!user){
            return res.status(403).json({
                status:"error",
                error:"Invalid Username or Password"
            })
       }
       if(await bcrypt.compare(password,user.password)){
            const token = jwt.sign({id:user._id,userName:userName},process.env.JWT_SECRET,{ expiresIn: '1h' })
            return res.json({status:"ok",data:token})
       }
       res.status(403).json({
            status:"error",
            error:"Invalid Username or Password"
        })

    } catch (error) {
        res.json({
            status:"error",
            message:error.message
        })
    }
})

module.exports = router