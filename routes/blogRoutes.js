const express = require("express");
const router = express.Router();
const path = require("path");
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./public/uploads/`))
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName)
    }
})
  
const upload = multer({ storage: storage });
const {blogController , getBlogs} = require("../controllers/blogController");

router.post("/" , upload.single('coverImage') , blogController );
router.get("/:_id" , getBlogs);

module.exports = router;