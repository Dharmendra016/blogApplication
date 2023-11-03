const userModel = require("../models/userModel");

exports.userSignup = async ( req , res) => { 

    try{
        const { username , email , password } = req.body; 

        const saveData = await userModel.create({fullName:username , email , password}) ; 

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

        const token = await userModel.checkPass(email , password);

        if(!token) return res.render("login" ,{
            error:"Incorrect email or password",
        });
        
        res.cookie("token", token).redirect("/");

    }
    catch(err) {
        console.log(err);
        res.render("login" ,{
            error:"Incorrect email or password",
        });
    }
}
