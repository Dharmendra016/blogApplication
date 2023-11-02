const express= require("express") ; 
const router = express.Router() ; 

const {userSignup , userLogin} = require("../controllers/userController");

router.post("/signup" ,userSignup);
router.post("/login" , userLogin);

router.get("/logout" , (req , res) => {
    return res.clearCookie("token").redirect("/");
})

module.exports = router ; 