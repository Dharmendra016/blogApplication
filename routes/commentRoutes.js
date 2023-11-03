const express = require("express");
const router = express.Router() ; 

const {commentController} = require("../controllers/commentController");

router.post("/comment/:_id" , commentController);

module.exports = router ;