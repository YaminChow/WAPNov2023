const express = require('express');
const router = express.Router();
const stuControl = require('../controllers/studentController');


router.post('/students/:studentId/courses',stuControl.saveCourse);
router.get('/students/:studentId',stuControl.getStudent);
router.get('/students/:studentId/getAverage',stuControl.getAvg);


module.exports = router;











