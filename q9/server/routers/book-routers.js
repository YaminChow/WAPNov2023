
let bookController = require('../controllers/book-controllers');
let express = require('express');
let router = express.Router();

router.get('/:bookId', bookController.getBookById);
router.post('/',bookController.saveBook);
//router.get('/firstname/:firstname',bookController.getBookByFirstName);
router.get('/',bookController.getBookByFirstName);


router.get('/',bookController.getAllBook);
router.get('/:bookId', bookController.getBookById);
router.put('/:bookId',bookController.updateBook);
router.delete('/:bookId',bookController.deleteBook);


module.exports = router;