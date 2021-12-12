const express = require('express');

const readController = require('../controllers/read');

const router = express.Router();

router.get('/readAllGroups', readController.readAllGroups);

router.get('/readSingleGroup/:groupId', readController.readSingleGroup);

router.get('/readAllStudents', readController.readAllStudents);

router.get('/readSingleStudent/:studentId', readController.readSingleStudent);

router.get('/readAllColleges', readController.readAllColleges);

router.get('/readSingleCollege/:collegeId', readController.readSingleCollege);

module.exports = router;