const Publication = require('../models/publication')

module.exports = {
    create,
}

function create(req, res) {
    Publication.findById(req.params.id, function(err, publication) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        publication.reviews.push(req.body)
        publication.save(function(err) {
            res.redirect(`/publications/${publication._id}`)
        })
    })
}