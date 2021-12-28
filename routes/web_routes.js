const {Router} = require('express');
const router = Router();
const path = require('path');

router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/loading', (req,res)=>{
    res.render("loading");
});

router.get('/complete', (req,res)=>{
   res.render("complete", {nombre: "uploading images"});
});

router.get('/:image', (req,res)=>{
   res.sendFile(path.join(__dirname, `../public/uploads/${req.params.image}`),
   function(err) {
    if(err) {
        res.send('This image doesnt exist');
    }
});
});



module.exports = router;