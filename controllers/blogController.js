const blogModel = require("../models/blogModel");

exports.blogController = async ( req ,res) => {

    try{    
        const {title , body } = req.body;
        const blog = await blogModel.create({
            title ,
            body,
            createdBy:req.user._id,
            coverImage:`/uploads/${req.file.filename}`,
        })

        return res.redirect(`/blog/${blog._id}`);
        
    }catch(err){
        console.log(err);
        res.json({
            message:err.message,
        })
    }

}

