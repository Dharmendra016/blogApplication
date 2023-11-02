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
        const {email , password} = req.body ; 

        const data = await userModel.checkPass(email , password);

        console.log("dta",data);
        if(!data) return res.redirect("/login");
        
        res.redirect("/");

    }
    catch(err) {
        console.log(err) ; 
        res.status(500).json({
            message:"internal error from login end point",
        })
    }
}
