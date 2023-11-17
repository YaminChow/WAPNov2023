const express = require('express');
const router = express.Router();
const path = require('path');

 router.get('/add',(req,res,next)=>{
     res.sendFile(path.join(__dirname,'..','view','product.html'));
});

router.post('/save',(req,res)=>{
    console.log(req.body);
    res.send(`${req.body.title},${req.body.price}`);
    //res.end('Save rout successful!');
});

router.delete('/delete',(req,res)=>{
    res.send(`${req.body.title},${req.body.price}`);
});

router.put('/edit',(req,res)=>{
    res.send(`${req.body.title},${req.body.price}`);
});

module.exports = router;