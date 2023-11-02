const {Schema , model} = require("mongoose");
const { createHmac , randomBytes} = require('node:crypto');


const userSchema = new Schema({

    fullName:{
        type:String , 
        require:true, 
    },
    email:{
        type:String , 
        require:true,
        unique:true, 
    },
    salt:{
        type:String , 
    },  
    profileImageUrl:{
        type:String,
        default:"/image/userImg.png",
    },
    password:{
        type:String , 
        require:true,    
    },
    role:{
        type:String ,
        enum:["USER" , "ADMIn"],
        default:"USER"
    }
})

userSchema.pre("save" , function (next) { 

    const user = this ; 

    if( !user.isModified("password")) return;

    const salt = randomBytes(16).toString() ;

    const hashedPassword = createHmac('sha256', salt)
               .update(user.password)
               .digest('hex');
    this.salt = salt;
    this.password = hashedPassword;
    next();
} )

module.exports = model("user" , userSchema) ; 