const express = require('express');
let app = express();
const bodyParser = require('body-parser');

//middleware to use the EJS template engine
app.set('view engine', 'ejs');

//middleware to be able POST <form> data 
app.use(bodyParser.urlencoded({extended: true}));

//store favourite band in a global variable
let favband = "not choosen yet";

app.get('/fav',  (req, res) => {
    res.render('band', {data: favband});
});

app.post('/fav',  (req, res) => {
    //change global variable favband to the value of the text field
    favband = req.body.favourite;
    res.render('band', {data: favband});
});

app.get('/page1',  (req, res) => {
    res.render('page1', {data: favband});
});

app.get('/page2',  (req, res) => {
    res.render('page2', {data: favband});
});

app.listen(process.env.PORT || 3000, ()=>{ 
    console.log("server started on: localhost:3000/fav");
});