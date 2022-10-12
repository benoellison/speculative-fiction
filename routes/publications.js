const express = require('express');
const router = express.Router();

const publicationCtrl = require('../controllers/publications');

router.get('/', publicationCtrl.index);
router.get('/new', publicationCtrl.new);
router.post('/', publicationCtrl.create);
router.get('/:id', publicationCtrl.show);

module.exports = router;