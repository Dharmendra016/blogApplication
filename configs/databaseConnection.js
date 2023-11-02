const mongoose = require("mongoose");
require("dotenv").config() ; 

const dbConnect = () => { 

    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("successfully connect to the database."))
    .catch((err) => console.log("Not able to connect due to internal error."));

}


module.exports = dbConnect;