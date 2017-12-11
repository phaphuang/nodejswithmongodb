const express = require('express');
const router = express.Router();
const JobController = require('../controllers/job.controller');

router.get('/', JobController.findAll); //api/jobs/ GET
router.post('/', JobController.create);

//Define the GET Endpoint
router.get('/:id', JobController.findOne);

module.exports = router;
