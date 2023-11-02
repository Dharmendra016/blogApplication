const express= require("express") ; 
const router = express.Router() ; 

const {userSignup} = require("../controllers/userController");

router.post("/signup" ,userSignup);

module.exports = router ; 