const Books = require('../model/books-model');

exports.getBookList=(req,res) =>{
    res.json(Books.getBookList());
}

exports.getBookListId =(req,res)=>{
    res.json(Books.getBookById(req.params.id));
}

exports.saveBook = (req,res) =>{
    const {title,ISBN,publishedDate,author} = req.body;
    new Books(title,ISBN,publishedDate,author).saveBook();
    res.status(201).end();
}

exports.updateBook = (req,res) => {
    const {title,ISBN,publishedDate,author} = req.body;
    const b = new Books(title,ISBN,publishedDate,author);
    b.id =req.params.id;
    b.updateBookById(req.params.id);
    res.status(200).json(b);   
}

exports.deleteBook =(req,res,next)=>{
    Books.deleteBookById(req.params.id);
    res.status(200).end();

}