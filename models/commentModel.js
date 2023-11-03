const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

    content:{
        type:String , 
        require:true, 
    },
    blogId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog",
    },
    commentedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }

},{timestamps:true});

module.exports = mongoose.model("comment" , commentSchema);