const Tag = require('../models/tag')

module.exports = {
    index,
    new: newTag,
    create,
}

function index(req, res) {
    Tag.find({}, function(err, tags) {
        res.render('tags/index', { title: 'Tag List', tags });
      });
}
function newTag(req, res) {
    res.render('tags/new', {title: 'New Tag'})
}
function create(req, res) {

}