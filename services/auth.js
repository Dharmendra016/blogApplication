const JWT = require("jsonwebtoken");
const secret ="$tar#!1129=05";

const createTokenForCookie = (user) => {
    const payload = { 
        _id:user._id , 
        fullName:user.fullName,
        email:user.email, 
        imageUrl:user.profileImageUrl,
        role:user.role,
    }
    return JWT.sign(payload , secret, {
        expiresIn: "1d"
    });
}

const validateToken = (token )=> { 
    return JWT.verify(token , secret) ; //this will return the above payload
}

module.exports = { 
    validateToken,
    createTokenForCookie
}