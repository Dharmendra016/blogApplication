const {validateToken} = require("../services/auth");
function checkAuthForCookie(tokenName){
    return (req , res , next) => { 
        const token = req.cookies[tokenName];
        if(!token) return next(); 

        try{
            const payload = validateToken(token); 
            req.user = payload;
        }catch(err){console.log(err)}
        return next() ; 
    }
}
module.exports = {checkAuthForCookie}