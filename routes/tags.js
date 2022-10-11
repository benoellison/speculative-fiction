const express = require('express');
const router = express.Router();

const TagCtrl = require('../controllers/tags');

router.get('/', TagCtrl.index);

module.exports = router;