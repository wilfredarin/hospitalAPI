import jwt from "jsonwebtoken"
export const jwtAuth = (req,res,next)=>{
    const token = req.headers["authorization"];
    if(!token){
        res.status(401).json("require Authorization!");
    }

  
    jwt.verify(token,"secretKey",(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
               
                req.username = data.username;
                req.id = data.id;
                next();
            }
        }
    );
    
}