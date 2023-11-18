const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/add',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','view','user.html'));
});

router.post('/user',(req,res)=>{
    console.log(req.body);
    res.send(`${req.body.firstname},${req.body.lastname}`);
});

module.exports = router;

