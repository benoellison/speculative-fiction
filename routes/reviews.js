const express = require('express');
const router = express.Router();

const reviewsCtrl = require('../controllers/reviews');

const isLoggedIn = require('../config/auth');

router.post('/publications/:id/reviews', isLoggedIn, reviewsCtrl.create);

module.exports = router;