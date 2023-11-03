const commentModel = require("../models/commentModel");
const blogModel = require("../models/blogModel");

exports.commentController = async (req, res) => { 

    try{
        const {comment} = req.body;

        await commentModel.create({
            content:comment , 
            commentedBy:req.user._id,
            blogId:req.params._id,
        })
        const blogs = await blogModel.findById({_id:req.params._id}).populate("createdBy");
        const comments = await commentModel.find({blogId:req.params._id}).populate("commentedBy");
        // return res.redirect(`/blog/${req.params._id}`)
        return res.render("blog" , {
            blogs,
            data:req.user,
            user:req.user,
            comments,  
        })
    }
    catch(err){
        console.log(err)
    }

}