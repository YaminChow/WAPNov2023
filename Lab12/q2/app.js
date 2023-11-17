const express = require('express');
const app = express();

app.disable('case sensitive routing');

app.set('port', process.env.PORT || 3000);
console.log(app.get('port'));

app.use('/products', (req, res, next) => {
    console.log('Products ....');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('Users...');
    res.end('User end');
});

app.use('/', (req,res,next)=>{
    console.log('Home.....');
    res.end('Home end');
});

app.use(function(req,res,next){
    console.log('1......');
    res.end('End');
});

app.listen(app.get('port'),()=>console.log(`listen on ${app.get('port')}`));