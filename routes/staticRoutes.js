const express = require("express");
const router = express.Router() ; 

router.get("/" , (req , res ) => { 
    res.render("home" , {
        data:req.user,
    }) ;
})


router.get("/login" , (req , res) => { 
    return res.render("login")
})

router.get("/signup" , (req , res) => {
    return res.render("signup");
})

router.get("/addblog" , (req , res)=>{
    return res.render("addBlog" , {
        data:req.user,
    })
})

module.exports = router ;