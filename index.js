const express = require('express');
const cors = require('cors');


require('dotenv').config();


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.use('/public', express.static('public'));

app.set("view engine", "ejs");
app.set("views", __dirname + '/views');

app.use('/file', require('./routes/images_routes'));
app.use('/', require('./routes/web_routes'));


app.listen(process.env.PORT, ()=>{
    console.log(`Server running in ${process.env.PORT}`);
});


