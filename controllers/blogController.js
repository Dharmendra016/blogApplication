const blogModel = require("../models/blogModel");
const commentModel = require("../models/commentModel");

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


exports.getBlogs = async(req , res)=>{
    try{
        const blogs = await blogModel.findById({_id:req.params._id}).populate("createdBy");

        const comments = await commentModel.find({blogId:req.params._id}).populate("commentedBy");
        console.log(blogs)
        res.render("blog" , {
            blogs,
            data:req.user,
            user:req.user,
            comments,
        })

    }catch(err){
        res.render("/")
    }
}
