const express = require('express');
const router = express.Router();
const jobRoutes = require('../routes/job.routes');

router.use('/jobs', jobRoutes);

module.exports = router;
