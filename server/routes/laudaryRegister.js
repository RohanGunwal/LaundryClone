const router = require("express").Router()
const User = require("../models/laudaryUser")
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt")

router.post("/",body("userName").isAlpha(),body("email").isEmail(),body("password").isLength({min:6}),
    async(req,res)=>{
        try {
            const { userName,email,password,phone,address} = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                // console.log(errors.errors[0].param === "email")
                
                if(errors.errors[0].param === "email"){
                    return res.status(404).json({status:"error",error:"Invalid Email Id"})
                }
                else if(errors.errors[0].param === "password"){
                    return res.status(404).json({status:"error",error:"Password must contain atleast 6 character"})
                }else if(errors.errors[0].param === "userName"){
                    return res.status(404).json({status:"error",error:"User name should be in alphabetic"})
                }
                return res.sendStatus(400)
                
            }
            const hash = await bcrypt.hash(password,10)
            // console.log(hash,"password")
            
            const user = await User.create({
                userName,
                email,
                password:hash,
                phone,
                address:{
                    state:address.state,
                    district:address.district,
                    area:address.area,
                    pincode:address.pincode
                }

            })
            
        } catch (error) {
            if(error.code === 11000){
               return res.status(403).json({
                    status:"error",
                    error:"User id already in use!"
                })
            }
           throw error
        }
        res.status(200).send({
            success:"Registered Successfully!"

        })
})

module.exports = router