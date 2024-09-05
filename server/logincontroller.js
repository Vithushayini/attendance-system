const jwt = require('jsonwebtoken');
const fs = require('fs');

//login user-
exports.loginUser = (req,res,next)=>{
    const{username,password}=req.body

    const credentials = JSON.parse(fs.readFileSync('credentials.json','utf-8'));
    const user = credentials.find(
        (cred) => cred.username === username && cred.password === password
    )

    if(user){
        const token = jwt.sign({username},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES_TIME
        })
        res.json({token})
    }else{
        res.status(401)
           .json({message:'Invalid usernam or password'})
    }
}