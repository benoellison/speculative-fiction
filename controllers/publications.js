const Publication = require('../models/publication')

module.exports = {
    index,
    new: newPublication,
}

function index(req, res) {
    res.render('publications/index', {title: 'Publication List'})
}
function newPublication(req, res) {
    res.render('publications/new', {title: 'New Publication'})
}
function create(req, res) {
    
}