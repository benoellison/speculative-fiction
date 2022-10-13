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
        res.render('tagList/index', { title: 'Tag List', tags });
      });
}
function newTag(req, res) {
    res.render('tagList/new', {title: 'New Tag'})
}
function show(req, res) {
    Tag.findById(req.params.id, function(err, tag) {
        res.render('tagList/show', { title: `${tag.name}`, tag });
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
        Tag.findById(req.body.tagId, function(err, tag) {
            console.log(req.body.tagId)
            console.log(tag)
            console.log(publication._id)
            console.log(req.params.id)
            publication.tags.push(req.body.tagId)
            tag.publications.push(publication._id);
            publication.save(function(err) {
                tag.save(function(err) {
                    res.redirect(`/publications/${publication._id}`)
                })
              })
        })
    })
}