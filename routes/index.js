const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'));

// localhost: 8080/professional
module.exports = router;