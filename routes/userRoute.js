const express= require("express") ; 
const router = express.Router() ; 

const {userSignup , userLogin} = require("../controllers/userController");

router.post("/signup" ,userSignup);
router.post("/login" , userLogin);

module.exports = router ; 