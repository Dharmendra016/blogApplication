const express = require("express");
const router = express.Router() ; 

router.get("/" , (req , res ) => { 
    res.render("home") ;
})


router.get("/login" , (req , res) => { 
    return res.render("login")
})

router.get("/signup" , (req , res) => {
    return res.render("signup");
})

module.exports = router ;