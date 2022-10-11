const express = require('express');
const router = express.Router();

const publicationCtrl = require('../controllers/publications');

router.get('/', publicationCtrl.index);
router.get('/new', publicationCtrl.new);
router.post('/', publicationCtrl.create);

module.exports = router;