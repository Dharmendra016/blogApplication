const express = require("express");
const router = express.Router() ; 
const blogModel = require("../models/blogModel");

router.get("/" , async (req , res ) => { 
    const blogData = await blogModel.find({});
    res.render("home" , {
        data:req.user,
        blog:blogData,
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