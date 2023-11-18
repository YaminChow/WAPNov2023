let books = [
    { id: 1, title: 'AA', ISBN: 'ISBN-1', publishedDate: '2023-01-01', author: 'AAA' },
    { id: 2, title: 'BB', ISBN: 'ISBN-2', publishedDate: '2023-02-01', author: 'BBB' },
    { id: 3, title: 'CC', ISBN: 'ISBN-3', publishedDate: '2023-04-01', author: 'CCC' },
    { id: 4, title: 'DD', ISBN: 'ISBN-4', publishedDate: '2023-04-01', author: 'DDD' }
];
let count = 5;

module.exports = class Book {
    constructor(title, ISBN, publishedDate, author) {
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author
    }

    static getBookList() {
        return books;
    }

    static getBookById(Id) {
        return books.find(b => b.id == Id);
    }
    saveBook() {
        this.id = count++;
        books.push(this);
    }
    //can't use arrow function coz we are using this.
    updateBookById(id) {
        const index = books.findIndex(b => b.id == id);
        if (index > -1) {
            this.id = id;
            books[index] = this;
        }
        else {
            throw new Error(`This id ${this.id} does not find out in DB.`);
        }
    }


    static deleteBookById(id) {
        const bookdel =books.filter(b=> b.id == id);
        this.id = id;
        books = books.filter(b => b.id != id);
        
        if(bookdel.length ==0){
            throw new Error(`This id ${this.id} doesn't find out in DB.`);
        }

        //const index = books.findIndex(b => b.id == id);
        // if (index > -1) {
        //     books.splice(index, 1);
        // }
        // else {
        //     throw new Error(`This id ${this.id} doesn't find out in DB.`);
        // }
    }
}