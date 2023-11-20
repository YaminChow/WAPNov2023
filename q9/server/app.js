const express = require('express');
const bookRouter = require('./routers/book-routers');
const app = express();

app.use(express.json());
app.use('/books', bookRouter);

app.use((err, req, res, next) => {
    res.status(500).send(`Internal server error ${err.message}`);
}
);

app.listen(3000,()=>console.log(`Listen port is 3000`));





