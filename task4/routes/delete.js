const express = require('express');

const deleteController = require('../controllers/delete');

const router = express.Router();

router.get('/deleteStudents', deleteController.deleteStudents);

router.get('/deleteGroups', deleteController.deleteGroups);

router.get('/deleteColleges', deleteController.deleteColleges);

router.post('/deleteAllStudents', deleteController.deleteAllStudents);

router.post('/deleteAllGroups', deleteController.deleteAllGroups);

router.post('/deleteAllColleges', deleteController.deleteAllColleges);

router.post('/deleteSingleStudent/:studentId', deleteController.deleteSingleStudent);

router.post('/deleteSingleGroup/:groupId', deleteController.deleteSingleGroup);

router.post('/deleteSingleCollege/:collegeId', deleteController.deleteSingleCollege);


module.exports = router;