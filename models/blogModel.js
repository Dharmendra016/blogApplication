const {Schema , model} = require("mongoose");


const blogSchema = new Schema({
    title:{
        type:String , 
        require:true, 
    },
    body:{
        type:String , 
        require:true, 
    },
    coverImage:{
        type:String,
        require:false
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user",
    }

},{timestamps:true});


module.exports = model("blog",blogSchema);