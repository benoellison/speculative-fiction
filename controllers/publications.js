const Publication = require('../models/publication')

module.exports = {
    index,
    new: newPublication,
    create,
    show,
}

function index(req, res) {
    Publication.find({}, function(err, publications) {
        res.render('publications/index', { title: 'Publication List', publications });
      });
}
function newPublication(req, res) {
    res.render('publications/new', {title: 'New Publication'})
}
function show(req, res) {
    Publication.findById(req.params.id, function(err, publication) {
        res.render('publications/show', { title: `${publication.title}`, publication });
    })
}
function create(req, res) {
    let publication = new Publication(req.body);
    publication.save(function(err) {
        if (err) return res.redirect('/publications/new');
        res.redirect(`/publications/${publication._id}`);
      });
}