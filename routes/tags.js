const express = require('express');
const router = express.Router();

const TagCtrl = require('../controllers/tags');

const isLoggedIn = require('../config/auth')

router.get('/', TagCtrl.index);
router.get('/new', isLoggedIn, TagCtrl.new);
router.post('/', TagCtrl.create);
router.get('/:id', TagCtrl.show);
router.post('/publications/:id/tags', isLoggedIn, TagCtrl.addTagtoPub)

module.exports = router;