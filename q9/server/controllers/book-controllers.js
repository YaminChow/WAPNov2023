const bookModel = require('../models/book-models');



exports.getAllBook = (req,res)=> {
    res.json(bookModel.getBookList());
}

exports.getBookByFirstName= (req,res)=>{
    console.log(req.params.firstname);
    res.json(bookModel.getBookListByFirstName(req.params.firstname));
}

exports.getBookById =(req,res) =>{
    res.json(bookModel.getBookById(req.params.bookId));
}

exports.saveBook =(req,res) =>{
    const{title,author}= req.body;
    new bookModel(title,author).saveBook();
    res.status('201').end();
}

exports.updateBook =(req,res)=>{
    const{title,author} =req.body;
    
    const b =new bookModel(title,author);
    b.bookId = req.params.bookId;
    b.updateBookById(req.params.bookId);
   
    res.status(200).json(b);
}

exports.deleteBook =(req,res)=>{
  
    bookModel.deleteBookById(req.params.bookId);
    res.status(200).end();
}