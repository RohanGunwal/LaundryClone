const router = require("express").Router()
const User = require("../models/laudaryUser")
const { body, validationResult } = require('express-validator');

router.post("/",body("userName").isAlpha(),body("email").isEmail(),body("password").isLength({min:6}),
    async(req,res)=>{
        try {
            const { userNmae,email,passwword,phone,address} = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).send({ errors: errors.array() });
            }
            const user = await findOne({email:{$eq:email}})
            if(user){
                return res.status(403).send({
                    existed:"This Email is already exist!"
                })
            }
            bcrypt.hash(passwword, 8, async function(err, hash) {
                if(err){
                  return res.status(500).send({message:err})
                }
                else{
                    const user = await User.create({
                        userNmae,
                        email,
                        passwword:hash,
                        phone,
                        address:{
                            state:address.state,
                            district:address.district,
                            area:address.ares,
                            pincode:address.pincode
                        }

                    })
                
                }
                res.status(200).send({
                    success:"Registered Successfully!"

                })
    
            });
            
            
        } catch (error) {
            res.status(400).send({message:"Please provide valid credintial"})
        }
})

module.exports = router