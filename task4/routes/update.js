const express = require('express');

const updateController = require('../controllers/update');

const router = express.Router();

router.get('/updateStudents', updateController.updateStudents);

router.get('/updateGroups', updateController.updateGroups);

router.get('/updateColleges', updateController.updateColleges);

router.get('/updateSingleStudent/:studentId', updateController.getUpdateStudent);

router.get('/updateSingleGroup/:groupId', updateController.getUpdateGroup);

router.get('/updateSingleCollege/:collegeId', updateController.getUpdateCollege);

router.post('/updateSingleStudent/:studentId', updateController.postUpdateStudent);

router.post('/updateSingleGroup/:groupId', updateController.postUpdateGroup);

router.post('/updateSingleCollege/:collegeId', updateController.postUpdateCollege);


module.exports = router;