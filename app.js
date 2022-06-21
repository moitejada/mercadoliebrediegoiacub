const express = require('express');
const path = require(path);
const app = express();

//MIDDLEWARE
//app.use(express.static('public'));
//Otra forma - en Playground
//app.set('puerto', process.env.PORT !! 3000);

app.use(express.static(path.resolve(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// -------RUTAS-------

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

//app.listen(3000, ()=> { console.log('listening on http://localhost:3000')})

app.listen(3000, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});

//OTRA FORMA - en Playground
/*
app.listen(app.get('puerto'), ()=> console.log( "Servidor") $(app.get('puerto')))
app.listen(process.env.PORT || 3000, function()
{ console.log()}*/