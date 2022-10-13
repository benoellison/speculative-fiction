const express = require('express');
const router = express.Router();

const publicationCtrl = require('../controllers/publications');

const isLoggedIn = require('../config/auth')

router.get('/', publicationCtrl.index);
router.get('/new', isLoggedIn, publicationCtrl.new);
router.post('/',  isLoggedIn, publicationCtrl.create);
router.get('/:id', publicationCtrl.show);

module.exports = router;