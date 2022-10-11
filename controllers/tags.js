const Tag = require('../models/tag')

module.exports = {
    index,
}

function index(req, res) {
    res.render('tags/index', {title: 'Tag List'})
}