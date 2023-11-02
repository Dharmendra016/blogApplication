const userModel = require("../models/userModel");

exports.userSignup = async ( req , res) => { 

    try{
        const { username , email , password } = req.body; 

        const saveData = await userModel.create({username , email , password}) ; 

        return res.redirect("/login");

    }catch(err) { 
        console.log(err) ; 
        res.status(500).json({
            message:"internal error ",
        })
    }

}


exports.userLogin = async ( req , res) => {
    try{

    }
    catch(err) {
        
    }
}
