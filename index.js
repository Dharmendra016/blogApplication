const express = require("express");
const path = require("path")
const app = express() ;
const cookieParser = require("cookie-parser");


//engine specifies 
app.set("view engine" , "ejs");
app.set("views" , path.resolve("views"))

//parsers
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

//middlewares
const {checkAuthForCookie} = require("./middlewares/auth");
app.use(checkAuthForCookie("token"));

//port 
require("dotenv").config();
const PORT = process.env.PORT || 4000 ;

//dbConnection 
const dbConnect = require("./configs/databaseConnection");
dbConnect();


//routes
const staticRoutes = require("./routes/staticRoutes");
const userRoutes =  require("./routes/userRoute");

app.use(staticRoutes);
app.use("/user" , userRoutes); 


//app listening
app.listen(PORT , () => {
    console.log("Server started at port no:" , PORT);
})