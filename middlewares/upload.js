const multer = require("multer");
const path = require('path');
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: (req,file,cb)=>{
        cb(null,uuidv4()+path.extname(file.originalname).toLowerCase());    }
})

const upload = multer({
    storage,
    dest: path.join(__dirname, 'public/uploads'),
    fileFilter: (req, file, cb)=>{
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype.toLowerCase());
        const extname = filetypes.test(path.extname(file.originalname.toLowerCase()));
        if(mimetype && extname){
            return cb(null, true);
        }
        cb('Error: invalid file')
    }
}).single('image')

module.exports = upload;