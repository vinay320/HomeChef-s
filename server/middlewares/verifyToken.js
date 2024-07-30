const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>
{
    const token=req.cookies.token;
    if(!token)
    {
        return res.status(401).json({success:false,message:"Unauthorized"});
    }
    try {

        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>
        {
            if(err) return res.status(401).json({success:false,message:"Invalid Token"});

            req.id=user.id;
        });
        next();
        
    } catch (error) {
        return res
          .status(500)
          .json({ success: false, message:error.message });
    }
}

module.exports={verifyToken};