let express = require('express');
let bookControl = require('../controllers/books-Controller');
let router = express.Router();

router.get('/',bookControl.getBookList);
router.get('/:id',bookControl.getBookListId);
router.post('/',bookControl.saveBook);
router.put('/:id', bookControl.updateBook);
router.delete('/:id',bookControl.deleteBook);

module.exports = router;