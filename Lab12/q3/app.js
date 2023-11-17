const express = require('express');
const path = require('path');

const productRouter = require('./route/product-route');
const userRouter = require('./route/user-router');


const app = express();

app.set("port", process.env.PORT || 3000);
console.log(app.get('port'));

app.use(express.urlencoded());

app.use('/public/abc',express.static(path.join(__dirname,'public','resource','css')));

app.use('/product',productRouter);
app.use(userRouter);
// app.post('/save',(req,res)=>{
//     console.log(`${req.body}`);
//     console.log(`${req.body.title}, ${req.body.price}`);
//     res.end('App Save successful');
// });

// app.use('/math',(req,res,next)=>{
//     throw new Error('index');
// });

app.use((req,res,next)=>{
    res.status(404).send('404 Not Found, Try other way');
});

app.use((err,req,res,next)=>{
    res.status(500).send('Internal server error!');
});

app.listen(3000);