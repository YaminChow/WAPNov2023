
let book =
[
    {
        "bookId":1,
        "title": "Node.js",
        "author":{
            "authorId": 303,
            "firstname": "Edward",
            "lastname": "Jack"
        }
    },
    {
        "bookId": 2,
        "title":"Angular",
        "author":{
            "authorId":308,
            "firstname":"Emma",
            "lastname": "Smith"
        }
    }
];
let count =3;
module.exports =class Book{
    constructor(title,author){
        this.title = title;
        this.author = author;
    }

    static getBookList(){
        return  book;
    }

    static getBookListByFirstName(fname){
         return book.filter(b => b.author.firstname.toUpperCase().includes(fname.toUpperCase()) );
    }

    static getBookById(id){
        return book.find(b => b.bookId ==id);
    }

    saveBook(){
        this.bookId = count++;
        book.push(this);
    }

    updateBookById(id){
        let index = book.findIndex(b => b.bookId == id);
        
        if(index > -1){
            this.id = id;
            book[index] = this; 
        }
        else{
            throw new Error(`Update: This id ${this.id} doesn't find out in DB`);
        }

    }  
    
    static deleteBookById(id){
        console.log(id);
        const bById = book.filter(b => b.bookId == id);
        book = book.filter(b => b.bookId != id);
        
        if(bById.length == 0){
            throw new Error(`Delete: This id ${id} doesn't find out in DB`);
        }

    }
}