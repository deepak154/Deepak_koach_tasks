const express = require('express');

const insertController = require('../controllers/insert');

const router = express.Router();

router.post('/insert', insertController.postInsertFile1, insertController.postInsertFile2, insertController.postInsertFile3);

module.exports = router;