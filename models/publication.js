const mongoose = require('mongoose');
const Schema = mongoose.Schema;

publicationSchema = new Schema({
    title: String,
    medium: {
        type: String,
        enum: ['Book', 'Movie', 'TV series', 'Comic series', 'Other']
    },
    creator: String,
    tags: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
},
{timestamps: true}
)

module.exports = mongoose.model('Publication', publicationSchema);