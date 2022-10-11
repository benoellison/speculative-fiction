const mongoose = require('mongoose');
const Schema = mongoose.Schema;

publicationSchema = new Schema({
    title: String,
    medium: {
        type: String,
        enum: ['Book', 'Movie', 'TV series', 'Comic series', 'Other']
    },
    creator: String,
    tags: [],
})

module.exports = mongoose.model('Publication', publicationSchema);