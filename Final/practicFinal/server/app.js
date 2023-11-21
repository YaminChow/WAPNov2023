const express = require('express');
const app = express(); 
app.use(express.json());

const stuRouter = require('./routers/studentRouter');
app.use('/',stuRouter);

app.use((err, req, res, next)=>{
    res.status(500).send(` ${err.message}`);
})


app.listen(3000,()=>console.log('Listen from 3000.'));










