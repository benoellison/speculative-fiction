const express = require('express');
const router = express.Router();

const TagCtrl = require('../controllers/tags');

router.get('/', TagCtrl.index);
router.get('/new', TagCtrl.new);

module.exports = router;