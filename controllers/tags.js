const Tag = require('../models/tag')
const Publication = require('../models/publication');

module.exports = {
    index,
    new: newTag,
    create,
    show,
    addTagtoPub,
}

function index(req, res) {
    Tag.find({}, function(err, tags) {
        res.render('tags/index', { title: 'Tag List', tags });
      });
}
function newTag(req, res) {
    res.render('tags/new', {title: 'New Tag'})
}
function show(req, res) {
    Tag.findById(req.params.id, function(err, tag) {
        res.render('tags/show', { title: `${tag.name}`, tag });
    })
}
function create(req, res) {
    let tag = new Tag(req.body);
    tag.save(function(err) {
        if (err) return res.redirect('/tags/new');
        res.redirect(`/tags/${tag._id}`);
      });
}

function addTagtoPub(req, res) {
    Publication.findById(req.params.id, function(err, publication) {
        publication.tags.push(req.body.tagId)
        publication.save(function(err) {
            res.redirect(`/publications/${publication._id}`)
          })
    })
}