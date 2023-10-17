const bcrypt        = require('bcrypt');
const User          = require('../models/userModel');


const loginUser      =async (req, res)=>{
    try{

        const {password, email} = req.body;
            if(password && email){
                const findUser= await User.findOne({email: email});
                if(findUser){
                    const passwordVerified = await bcrypt.compareSync(password, findUser.password)
                    if(passwordVerified){
                        res.status(200)
                    }else{
                        res.status(404)
                    }
                }else{
                    res.status(404)
                }
                
            }else{
                res.status(404)
            }
    }catch(error){
        res.status(400)
    }   
}


const registerUser   =async(req, res)=>{ 
    try{
        const {password, email}= req.body
        if(password && email){
            const newUser= await User.create({
                email:          email,
                password:       password,
            })
            res.status(200)
        }else{
            res.status(400)
        }
        
    }catch(error){
        res.status(400);
    }
   
}





module.exports={loginUser, registerUser}