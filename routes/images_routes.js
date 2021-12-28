const upload = require("../middlewares/upload");
const { Router } = require("express");
const router = Router();
const path = require('path');
const multer = require('multer');

const ros = upload;

router.post('/upload',upload,(req,res)=>{
    res.render("loading", {nombre: "uploading images", file: process.env.REACT_APP_API_URL+'/'+req.file.filename});
});

module.exports = router;
