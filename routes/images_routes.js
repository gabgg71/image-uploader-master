const upload = require("../middlewares/upload");
const { Router } = require("express");
const router = Router();


router.post('/upload',upload,(req,res)=>{
    res.render("loading", {nombre: "uploading images", file: process.env.APP_API_URL+req.file.filename});
});




module.exports = router;
