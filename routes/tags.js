const express = require('express');
const router = express.Router();

const TagCtrl = require('../controllers/tags');

router.get('/', TagCtrl.index);
router.get('/new', TagCtrl.new);
router.post('/', TagCtrl.create);
router.get('/:id', TagCtrl.show);
router.post('/publications/:id/tags', TagCtrl.addTagtoPub)

module.exports = router;